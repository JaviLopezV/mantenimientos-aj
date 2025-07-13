import { useTranslations } from "next-intl";
import { Typography } from "@mui/material";

export async function generateMetadata({ params }) {
  const { locale } = params;
  const messages = (
    await import(`../../../../public/locales/${locale}/common.json`)
  ).default;

  return {
    title: messages.Seo.contact.title,
    description: messages.Seo.contact.description,
    alternates: {
      canonical: `https://extintores-panoramica-aj.vercel.app/${locale}/contact`,
    },
  };
}

export default function Contact() {
  const t = useTranslations();

  return <Typography variant="h3">{t("contact")}</Typography>;
}
