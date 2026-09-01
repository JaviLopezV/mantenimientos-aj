"use client";

import { Typography } from "@jlopvil/mui-kit";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div>
      <Typography variant="h4">{t("Seo.contact.title")}</Typography>
      <Typography variant="body1">{t("Seo.contact.description")}</Typography>
    </div>
  );
}
