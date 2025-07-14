import dynamic from "next/dynamic";

const MantainanceFireSystemsPage = dynamic(
  () => import("./MantainanceFireSystemsPage"),
  { ssr: false }
);

export async function generateMetadata({ params }) {
  const { locale } = params;
  const messages = (
    await import(`../../../../public/locales/${locale}/common.json`)
  ).default;

  return {
    title: messages.Seo.mantainanceFireSystems.title,
    description: messages.Seo.mantainanceFireSystems.description,
    alternates: {
      canonical: `https://extintores-panoramica-aj.vercel.app/${locale}/mantainance-fire-systems`,
    },
  };
}

export default function Page() {
  return <MantainanceFireSystemsPage />;
}
