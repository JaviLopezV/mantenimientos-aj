import dynamic from "next/dynamic";

const QuotePage = dynamic(() => import("./QuotePage"), { ssr: false });

export async function generateMetadata({ params }) {
  const { locale } = params;
  const messages = (
    await import(`../../../../public/locales/${locale}/common.json`)
  ).default;

  return {
    title: messages.Seo.quote.title,
    description: messages.Seo.quote.description,
    alternates: {
      canonical: `https://extintores-panoramica-aj.vercel.app/${locale}/quote`,
    },
  };
}

export default function Page() {
  return <QuotePage />;
}
