import dynamic from "next/dynamic";

const LowVoltagePage = dynamic(() => import("./LowVoltagePage"), {
  ssr: false,
});

export async function generateMetadata({ params }) {
  const { locale } = params;
  const messages = (
    await import(`../../../../public/locales/${locale}/common.json`)
  ).default;

  return {
    title: messages.Seo.lowVoltage.title,
    description: messages.Seo.lowVoltage.description,
    alternates: {
      canonical: `https://extintores-panoramica-aj.vercel.app/${locale}/low-voltage`,
    },
  };
}

export default function Page() {
  return <LowVoltagePage />;
}
