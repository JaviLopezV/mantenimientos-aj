"use client";

import { useTranslations } from "next-intl";
import { Typography } from "@mui/material";

export default function ProductsPage() {
  const t = useTranslations();

  return (
    <div>
      <Typography variant="h4">{t("Seo.products.title")}</Typography>
      <Typography variant="body1">{t("Seo.products.description")}</Typography>
    </div>
  );
}
