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
  metadataBase: new URL("https://mantenimientos-panoramica-aj.vercel.app"),
  title: {
    default: "Mantenimientos Panorámica AJ",
    template: "%s | Mantenimientos Panorámica AJ",
  },
  icons: {
    icon: "/extintor.png",
  },
};

export default async function LocaleLayout({ children, params }) {
  const locale = params.locale;
  const messages = (
    await import(`../../../public/locales/${locale}/common.json`)
  ).default;

  return (
    <html lang={locale}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/extintor.png" />
        <meta name="theme-color" content="#d32f2f" />
        <meta
          name="google-site-verification"
          content="SWoP3vXcEcYrXGFf4wbGKBdc79pNIsc_tykYLQ1ha9M"
        />
      </head>
      <body>
        <StructuredData />

        <LocaleProvider locale={locale} messages={messages}>
          {/* Header with locale switcher */}
          <Header currentLocale={locale} />
          <InstallPrompt />
          {children}
          <Footer currentLocale={locale} />
        </LocaleProvider>
      </body>
    </html>
  );
}
