import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("./HomePage"), { ssr: false });

export async function generateMetadata({ params }) {
  const { locale } = params;
  const messages = (
    await import(`../../../public/locales/${locale}/common.json`)
  ).default;

  return {
    title: messages.Seo.home.title,
    description: messages.Seo.home.description,
    alternates: {
      canonical: `https://extintores-panoramica-aj.vercel.app/${locale}`,
      languages: {
        en: "https://extintores-panoramica-aj.vercel.app/en",
        es: "https://extintores-panoramica-aj.vercel.app/es",
        ca: "https://extintores-panoramica-aj.vercel.app/ca",
        fr: "https://extintores-panoramica-aj.vercel.app/fr",
        de: "https://extintores-panoramica-aj.vercel.app/de",
      },
    },
  };
}

export default function Page() {
  return <HomePage />;
}
