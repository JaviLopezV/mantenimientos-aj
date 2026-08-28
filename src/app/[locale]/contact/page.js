import dynamic from "next/dynamic";
import Loader from "../../../components/Loading";

const ContactPage = dynamic(() => import("./ContactPage"), {
  loading: Loader,
});

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = (
    await import(`../../../../public/locales/${locale}/common.json`)
  ).default;

  return {
    title: messages.Seo.contact.title,
    description: messages.Seo.contact.description,
    alternates: {
      canonical: `https://mantenimientos-aj.vercel.app/${locale}/contact`,
    },
  };
}

export default function Page() {
  return <ContactPage />;
}
