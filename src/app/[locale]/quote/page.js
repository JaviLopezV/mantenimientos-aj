import { createPageMetadata } from "@/config/metadata";
import dynamic from "next/dynamic";
import Loader from "../../../components/Loading";

const QuotePage = dynamic(() => import("./QuotePage"), {
  loading: Loader,
});

export async function generateMetadata({ params }) {
  return createPageMetadata(params, "quote");
}

export default function Page() {
  return <QuotePage />;
}
