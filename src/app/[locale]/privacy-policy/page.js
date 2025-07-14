import dynamic from "next/dynamic";

const PrivacyPolicyPage = dynamic(() => import("./PrivacyPolicyPage"), {
  ssr: false,
});

export async function generateMetadata({ params }) {
  const { locale } = params;
  const messages = (
    await import(`../../../../public/locales/${locale}/common.json`)
  ).default;

  return {
    title: messages.Seo.privacyPolicy.title,
    description: messages.Seo.privacyPolicy.description,
    alternates: {
      canonical: `https://extintores-panoramica-aj.vercel.app/${locale}/privacy-policy`,
    },
  };
}

export default function Page() {
  return <PrivacyPolicyPage />;
}
