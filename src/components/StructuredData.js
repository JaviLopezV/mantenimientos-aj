const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mantenimientos AJ",
  url: "https://mantenimientos-aj.vercel.app",
  email: "info@c-azahar.com",
  telephone: "+34 964 848 711",
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
