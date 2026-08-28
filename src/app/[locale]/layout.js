import LocaleProvider from "./LocaleProvider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InstallPrompt from "../../components/InstallPrompt";
import StructuredData from "../../components/StructuredData";

export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "es" },
    { locale: "ca" },
    { locale: "de" },
    { locale: "fr" },
  ];
}

export const metadata = {
  metadataBase: new URL("https://mantenimientos-aj.vercel.app"),
  title: {
    default: "Mantenimientos AJ",
    template: "%s | Mantenimientos AJ",
  },
  icons: {
    icon: "/extintor.png",
  },
  verification: {
    google: "SWoP3vXcEcYrXGFf4wbGKBdc79pNIsc_tykYLQ1ha9M",
  },
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const messages = (
    await import(`../../../public/locales/${locale}/common.json`)
  ).default;

  return (
    <>
      <StructuredData />

      <LocaleProvider locale={locale} messages={messages}>
        <Header currentLocale={locale} />
        <InstallPrompt />
        {children}
        <Footer currentLocale={locale} />
      </LocaleProvider>
    </>
  );
}
