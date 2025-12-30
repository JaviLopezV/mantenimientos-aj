import dynamic from "next/dynamic";
import Loader from "../../../components/Loading";

const PrivacyPolicyPage = dynamic(() => import("./PrivacyPolicyPage"), {
  ssr: false,
  loading: Loader,
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
      canonical: `https://mantenimientos-aj.vercel.app/${locale}/privacy-policy`,
    },
  };
}

export default function Page() {
  return <PrivacyPolicyPage />;
}
