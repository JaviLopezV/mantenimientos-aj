import dynamic from "next/dynamic";
import Loader from "../../../components/Loading";

const ProductsPage = dynamic(() => import("./ProductsPage"), {
  loading: Loader,
});

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (
    await import(`../../../../public/locales/${locale}/common.json`)
  ).default;

  return {
    title: messages.Seo.products.title,
    description: messages.Seo.products.description,
    alternates: {
      canonical: `https://mantenimientos-aj.vercel.app/${locale}/products`,
    },
  };
}

export default function Page() {
  return <ProductsPage />;
}
