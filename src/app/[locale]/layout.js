import "./globals.css";
import { notFound } from "next/navigation";
import { locales } from "@/config/seo";
import LocaleProvider from "./LocaleProvider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InstallPrompt from "../../components/InstallPrompt";
import StructuredData from "../../components/StructuredData";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  metadataBase: new URL("https://mantenimientos-aj.vercel.app"),
  title: {
    default: "Mantenimientos AJ",
    template: "%s | Mantenimientos AJ",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/extintor.png",
  },
  verification: {
    google: "SWoP3vXcEcYrXGFf4wbGKBdc79pNIsc_tykYLQ1ha9M",
  },
};

export const viewport = { themeColor: "#d32f2f" };

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  const messages = (
    await import(`../../../public/locales/${locale}/common.json`)
  ).default;

  return (
    <html lang={locale}>
      <body>
          <StructuredData />

          <LocaleProvider locale={locale} messages={messages}>
            <Header currentLocale={locale} />
            <InstallPrompt />
            {children}
            <Footer currentLocale={locale} />
          </LocaleProvider>
      </body>
    </html>
  );
}
