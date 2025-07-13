import dynamic from "next/dynamic";

const ProductsPage = dynamic(() => import("./ProductsPage"), { ssr: false });

export async function generateMetadata({ params }) {
  const { locale } = params;
  const messages = (
    await import(`../../../../public/locales/${locale}/common.json`)
  ).default;

  return {
    title: messages.Seo.products.title,
    description: messages.Seo.products.description,
    alternates: {
      canonical: `https://extintores-panoramica-aj.vercel.app/${locale}/products`,
    },
  };
}

export default function Page() {
  return <ProductsPage />;
}
