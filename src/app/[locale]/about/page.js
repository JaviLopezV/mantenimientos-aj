import { createPageMetadata } from "@/config/metadata";
import dynamic from "next/dynamic";
import Loader from "../../../components/Loading";

const AboutPage = dynamic(() => import("./AboutPage"), {
  loading: Loader,
});

export async function generateMetadata({ params }) {
  return createPageMetadata(params, "about");
}

export default function Page() {
  return <AboutPage />;
}
