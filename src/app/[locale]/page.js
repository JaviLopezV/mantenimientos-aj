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
      canonical: `https://mantenimientos-aj.vercel.app/${locale}`,
      languages: {
        en: "https://mantenimientos-aj.vercel.app/en",
        es: "https://mantenimientos-aj.vercel.app/es",
        ca: "https://mantenimientos-aj.vercel.app/ca",
        fr: "https://mantenimientos-aj.vercel.app/fr",
        de: "https://mantenimientos-aj.vercel.app/de",
      },
    },
  };
}

export default async function Page() {
  return <HomePage />;
}
