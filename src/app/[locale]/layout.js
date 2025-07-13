import LocaleProvider from "./LocaleProvider";
import Header from "../../components/Header";

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
    icon: "/favicon.ico",
  },
};

export default async function LocaleLayout({ children, params }) {
  const locale = params.locale;
  const messages = (
    await import(`../../../public/locales/${locale}/common.json`)
  ).default;

  return (
    <html lang={locale}>
      <body>
        <LocaleProvider locale={locale} messages={messages}>
          {/* Header with locale switcher */}
          <Header currentLocale={locale} />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
