import dynamic from "next/dynamic";
import Loader from "../../../components/Loading";

const TermsPage = dynamic(() => import("./TermsPage"), {
  ssr: false,
  loading: Loader,
});

export async function generateMetadata({ params }) {
  const { locale } = params;
  const messages = (
    await import(`../../../../public/locales/${locale}/common.json`)
  ).default;

  return {
    title: messages.Seo.terms.title,
    description: messages.Seo.terms.description,
    alternates: {
      canonical: `https://extintores-panoramica-aj.vercel.app/${locale}/contact`,
    },
  };
}

export default function Page() {
  return <TermsPage />;
}
