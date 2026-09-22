import { company } from "@/config/company";
import { siteUrl } from "@/config/seo";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Mantenimientos AJ",
  image: `${siteUrl}/logo.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "C. del Cid, 16",
    addressLocality: "Vinaròs",
    addressRegion: "Castellón",
    postalCode: "12500",
    addressCountry: "ES",
  },
  url: siteUrl,
  email: company.email,
  telephone: company.phone,
  areaServed: ["Vinaros", "Sant Jordi", "Madrid", "Barcelona"],
};

export default function StructuredData() {
  return (
    <script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
