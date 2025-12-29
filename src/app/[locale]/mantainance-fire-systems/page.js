import dynamic from "next/dynamic";
import Loader from "../../../components/Loading";

const MantainanceFireSystemsPage = dynamic(
  () => import("./MantainanceFireSystemsPage"),
  { ssr: false, loading: Loader }
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
      canonical: `https://mantenimientos-panoramica-aj.vercel.app/${locale}/mantainance-fire-systems`,
    },
  };
}

export default function Page() {
  return <MantainanceFireSystemsPage />;
}
