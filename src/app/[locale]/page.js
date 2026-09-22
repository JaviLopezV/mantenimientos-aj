import { createPageMetadata } from "@/config/metadata";
import dynamic from "next/dynamic";

import Loader from "../../components/Loading";

const HomePage = dynamic(() => import("./HomePage"), {
  loading: Loader,
});

export async function generateMetadata({ params }) {
  return createPageMetadata(params, "");
}

export default async function Page() {
  return <HomePage />;
}
