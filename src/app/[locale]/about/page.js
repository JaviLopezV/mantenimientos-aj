import dynamic from "next/dynamic";

const AboutPage = dynamic(() => import("./AboutPage"), { ssr: false });

export async function generateMetadata({ params }) {
  const { locale } = params;
  const messages = (
    await import(`../../../../public/locales/${locale}/common.json`)
  ).default;

  return {
    title: messages.Seo.contact.title,
    description: messages.Seo.contact.description,
    alternates: {
      canonical: `https://extintores-panoramica-aj.vercel.app/${locale}/contact`,
    },
  };
}

export default function Page() {
  return <AboutPage />;
}
