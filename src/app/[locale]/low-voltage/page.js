import { createPageMetadata } from "@/config/metadata";
import dynamic from "next/dynamic";
import Loader from "../../../components/Loading";

const LowVoltagePage = dynamic(() => import("./LowVoltagePage"), {
  loading: Loader,
});

export async function generateMetadata({ params }) {
  return createPageMetadata(params, "low-voltage");
}

export default function Page() {
  return <LowVoltagePage />;
}
