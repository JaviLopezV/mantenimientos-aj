import { createPageMetadata } from "@/config/metadata";
import dynamic from "next/dynamic";
import Loader from "../../../components/Loading";

const ProductsPage = dynamic(() => import("./ProductsPage"), {
  loading: Loader,
});

export async function generateMetadata({ params }) {
  return createPageMetadata(params, "products");
}

export default function Page() {
  return <ProductsPage />;
}
