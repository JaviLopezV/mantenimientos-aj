import { createPageMetadata } from "@/config/metadata";
import dynamic from "next/dynamic";
import Loader from "../../../components/Loading";

const TermsPage = dynamic(() => import("./TermsPage"), {
  loading: Loader,
});

export async function generateMetadata({ params }) {
  return createPageMetadata(params, "terms");
}

export default function Page() {
  return <TermsPage />;
}
