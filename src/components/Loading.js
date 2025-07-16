"use client";
import { useTranslations } from "next-intl";

export default function Loader() {
  const t = useTranslations();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <br />
      <br />
      <br />
      <img src="/extintor.png" alt={t("loading")} width="300" height="400" />
      <p
        style={{
          marginTop: 16,
          fontSize: 24,
          fontWeight: 600,
          fontFamily: "'Roboto', sans-serif",
          textAlign: "center",
          letterSpacing: "0.05em",
        }}
      >
        {t("loading")}
      </p>
    </div>
  );
}
