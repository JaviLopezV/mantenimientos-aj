import dynamic from "next/dynamic";
import Loader from "../../../components/Loading";

const AboutPage = dynamic(() => import("./AboutPage"), {
  ssr: false,
  loading: Loader,
});

export async function generateMetadata({ params }) {
  const { locale } = params;
  const messages = (
    await import(`../../../../public/locales/${locale}/common.json`)
  ).default;

  return {
    title: messages.Seo.about.title,
    description: messages.Seo.about.description,
    alternates: {
      canonical: `https://mantenimientos-panoramica-aj.vercel.app/${locale}/about`,
    },
  };
}

export default function Page() {
  return <AboutPage />;
}
