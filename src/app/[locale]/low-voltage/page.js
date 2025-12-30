import dynamic from "next/dynamic";
import Loader from "../../../components/Loading";

const LowVoltagePage = dynamic(() => import("./LowVoltagePage"), {
  ssr: false,
  loading: Loader,
});

export async function generateMetadata({ params }) {
  const { locale } = params;
  const messages = (
    await import(`../../../../public/locales/${locale}/common.json`)
  ).default;

  return {
    title: messages.Seo.lowVoltage.title,
    description: messages.Seo.lowVoltage.description,
    alternates: {
      canonical: `https://mantenimientos-aj.vercel.app/${locale}/low-voltage`,
    },
  };
}

export default function Page() {
  return <LowVoltagePage />;
}
