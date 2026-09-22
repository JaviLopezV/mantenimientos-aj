export const siteUrl = "https://mantenimientos-aj.vercel.app";
export const locales = ["es", "en", "ca", "de", "fr"];
export const defaultLocale = "es";
export const pageKeys = {
  "": "home",
  contact: "contact",
  products: "products",
  about: "about",
  "low-voltage": "lowVoltage",
  "maintenance-fire-systems": "maintenanceFireSystems",
  "privacy-policy": "privacyPolicy",
  quote: "quote",
  terms: "terms",
};

export function pageUrl(locale, path = "") {
  return `${siteUrl}/${locale}${path ? `/${path}` : ""}`;
}

export function languageAlternates(path = "") {
  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, pageUrl(locale, path)]),
    ),
    "x-default": pageUrl(defaultLocale, path),
  };
}
