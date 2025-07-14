"use client";

import { useTranslations } from "next-intl";
import { Typography } from "@mui/material";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div>
      <Typography variant="h4">{t("Seo.contact.title")}</Typography>
      <Typography variant="body1">{t("Seo.contact.description")}</Typography>
    </div>
  );
}
