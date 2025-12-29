"use client";

import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    const id = "jsonld-website-schema";

    if (document.getElementById(id)) return;

    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Mantenimientos Panorámica AJ",
      url: "https://mantenimientos-panoramica-aj.vercel.app",
    });

    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById(id);
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  return null;
}
