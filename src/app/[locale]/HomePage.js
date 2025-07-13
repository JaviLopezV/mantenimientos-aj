"use client";

import { useTranslations } from "next-intl";
import { Typography } from "@mui/material";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div>
      <Typography variant="h4">{t("Seo.home.title")}</Typography>
      <Typography variant="body1">{t("Seo.home.description")}</Typography>
    </div>
  );
}
