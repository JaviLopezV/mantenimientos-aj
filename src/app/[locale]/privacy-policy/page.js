import { createPageMetadata } from "@/config/metadata";
import dynamic from "next/dynamic";
import Loader from "../../../components/Loading";

const PrivacyPolicyPage = dynamic(() => import("./PrivacyPolicyPage"), {
  loading: Loader,
});

export async function generateMetadata({ params }) {
  return createPageMetadata(params, "privacy-policy");
}

export default function Page() {
  return <PrivacyPolicyPage />;
}
