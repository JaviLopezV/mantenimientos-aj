import { locales, pageKeys, pageUrl, languageAlternates } from "@/config/seo";

export default function sitemap() {
  return Object.keys(pageKeys).flatMap((path) =>
    locales.map((locale) => ({
      url: pageUrl(locale, path),
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
