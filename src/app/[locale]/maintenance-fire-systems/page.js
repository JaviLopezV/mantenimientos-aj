import dynamic from "next/dynamic";
import Loader from "../../../components/Loading";

const MaintenanceFireSystemsPage = dynamic(
  () => import("./MaintenanceFireSystemsPage"),
  { loading: Loader },
);

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (
    await import(`../../../../public/locales/${locale}/common.json`)
  ).default;

  return {
    title: messages.Seo.maintenanceFireSystems.title,
    description: messages.Seo.maintenanceFireSystems.description,
    alternates: {
      canonical: `https://mantenimientos-aj.vercel.app/${locale}/maintenance-fire-systems`,
    },
  };
}

export default function Page() {
  return <MaintenanceFireSystemsPage />;
}
