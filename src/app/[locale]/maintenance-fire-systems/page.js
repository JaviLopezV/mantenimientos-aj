import { createPageMetadata } from "@/config/metadata";
import dynamic from "next/dynamic";
import Loader from "../../../components/Loading";

const MaintenanceFireSystemsPage = dynamic(
  () => import("./MaintenanceFireSystemsPage"),
  { loading: Loader },
);

export async function generateMetadata({ params }) {
  return createPageMetadata(params, "maintenance-fire-systems");
}

export default function Page() {
  return <MaintenanceFireSystemsPage />;
}
