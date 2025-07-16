import LocaleProvider from "./LocaleProvider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
  metadataBase: new URL("https://extintores-panoramica-aj.vercel.app"),
  title: {
    default: "Extintores Panorámica AJ",
    template: "%s | Extintores Panorámica AJ",
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
        <meta
          name="google-site-verification"
          content="SWoP3vXcEcYrXGFf4wbGKBdc79pNIsc_tykYLQ1ha9M"
        />
      </head>
      <body>
        <LocaleProvider locale={locale} messages={messages}>
          {/* Header with locale switcher */}
          <Header currentLocale={locale} />
          {children}
          <Footer currentLocale={locale} />
        </LocaleProvider>
      </body>
    </html>
  );
}
