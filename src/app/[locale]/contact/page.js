import { createPageMetadata } from "@/config/metadata";
import dynamic from "next/dynamic";
import Loader from "../../../components/Loading";

const ContactPage = dynamic(() => import("./ContactPage"), {
  loading: Loader,
});

export async function generateMetadata({ params }) {
  return createPageMetadata(params, "contact");
}

export default function Page() {
  return <ContactPage />;
}
