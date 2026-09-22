import { notFound } from "next/navigation";
import { locales, pageKeys, pageUrl, languageAlternates, siteUrl } from "./seo";

export async function createPageMetadata(params, path = "") {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  const messages = (await import(`../../public/locales/${locale}/common.json`))
    .default;
  const { title, description } = messages.Seo[pageKeys[path]];
  const url = pageUrl(locale, path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName: "Mantenimientos AJ",
      title,
      description,
      url,
      locale: {
        es: "es_ES",
        en: "en_GB",
        ca: "ca_ES",
        de: "de_DE",
        fr: "fr_FR",
      }[locale],
      images: [{ url: `${siteUrl}/logo.jpg`, alt: "Mantenimientos AJ" }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [`${siteUrl}/logo.jpg`],
    },
  };
}
