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
    keywords: [
      messages.Seo.keywords.keyword1,
      messages.Seo.keywords.keyword2,
      messages.Seo.keywords.keyword3,
      messages.Seo.keywords.keyword4,
      messages.Seo.keywords.keyword5,
      messages.Seo.keywords.keyword6,
      messages.Seo.keywords.keyword7,
      messages.Seo.keywords.keyword8,
      messages.Seo.keywords.keyword9,
      messages.Seo.keywords.keyword10,
      messages.Seo.keywords.keyword11,
      messages.Seo.keywords.keyword12,
      messages.Seo.keywords.keyword13,
      messages.Seo.keywords.keyword14,
    ],
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
