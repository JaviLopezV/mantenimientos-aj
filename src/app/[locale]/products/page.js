import { useTranslations } from "next-intl";
import { Typography } from "@mui/material";

export async function generateMetadata({ params }) {
  const { locale } = params;
  const messages = (
    await import(`../../../../public/locales/${locale}/common.json`)
  ).default;

  return {
    title: messages.Seo.products.title,
    description: messages.Seo.products.description,
    alternates: {
      canonical: `https://extintores-panoramica-aj.vercel.app/${locale}/products`,
    },
  };
}

export default function Products() {
  const t = useTranslations();

  return <Typography variant="h3">{t("products")}</Typography>;
}
