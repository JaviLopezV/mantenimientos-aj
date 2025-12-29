import dynamic from "next/dynamic";

import Loader from "../../components/Loading";

const HomePage = dynamic(() => import("./HomePage"), {
  ssr: false,
  loading: Loader,
});

export async function generateMetadata({ params }) {
  const { locale } = params;
  const messages = (
    await import(`../../../public/locales/${locale}/common.json`)
  ).default;

  return {
    title: messages.Seo.home.title,
    description: messages.Seo.home.description,
    alternates: {
      canonical: `https://mantenimientos-panoramica-aj.vercel.app/${locale}`,
      languages: {
        en: "https://mantenimientos-panoramica-aj.vercel.app/en",
        es: "https://mantenimientos-panoramica-aj.vercel.app/es",
        ca: "https://mantenimientos-panoramica-aj.vercel.app/ca",
        fr: "https://mantenimientos-panoramica-aj.vercel.app/fr",
        de: "https://mantenimientos-panoramica-aj.vercel.app/de",
      },
    },
  };
}

export default async function Page() {
  return <HomePage />;
}
