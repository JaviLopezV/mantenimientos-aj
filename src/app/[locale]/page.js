"use client";
import { useTranslations } from "next-intl";
import { Typography } from "@mui/material";

export async function generateMetadata({ params }) {
  const { locale } = params;
  const messages = (
    await import(`../../../public/locales/${locale}/common.json`)
  ).default;

  return {
    title: messages.Seo.home.title,
    description: messages.Seo.home.description,
    alternates: {
      canonical: `https://extintores-panoramica-aj.vercel.app/${locale}`,
      languages: {
        en: "https://extintores-panoramica-aj.vercel.app/en",
        es: "https://extintores-panoramica-aj.vercel.app/es",
        ca: "https://extintores-panoramica-aj.vercel.app/ca",
        fr: "https://extintores-panoramica-aj.vercel.app/fr",
        de: "https://extintores-panoramica-aj.vercel.app/de",
      },
    },
  };
}

export default function Home() {
  const t = useTranslations();

  return <Typography variant="h3">{t("home")}</Typography>;
}
