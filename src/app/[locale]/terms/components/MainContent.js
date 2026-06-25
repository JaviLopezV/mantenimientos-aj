"use client";

import { useTranslations } from "next-intl";

import React from "react";
import { Paper, Typography, Link as MuiLink } from "@mui/material";
import Spacer from "../../../../components/Spacer";

const MainContent = () => {
  const t = useTranslations();

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        p: { xs: 3, md: 5 },
        borderRadius: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        {t("terms.title")}
      </Typography>
      <Typography variant="body1">{t("terms.lastUpdated")}</Typography>
      <Spacer size={1} />
      <Typography variant="h6" gutterBottom>
        {t("terms.section1.title")}
      </Typography>
      <Typography variant="body1">{t("terms.section1.content")}</Typography>
      <Spacer size={1} />
      <Typography variant="h6" gutterBottom>
        {t("terms.section2.title")}
      </Typography>
      <Typography variant="body1">{t("terms.section2.content")}</Typography>
      <Spacer size={1} />
      <Typography variant="h6" gutterBottom>
        {t("terms.section3.title")}
      </Typography>
      <Typography variant="body1">{t("terms.section3.content")}</Typography>
      <Spacer size={1} />
      <Typography variant="h6" gutterBottom>
        {t("terms.section4.title")}
      </Typography>
      <Typography variant="body1">{t("terms.section4.content")}</Typography>
      <Spacer size={1} />
      <Typography variant="h6" gutterBottom>
        {t("terms.section5.title")}
      </Typography>
      <Typography variant="body1">{t("terms.section5.content")}</Typography>
      <Spacer size={1} />
      <Typography variant="h6" gutterBottom>
        {t("terms.section6.title")}
      </Typography>
      <Typography variant="body1">{t("terms.section6.content")}</Typography>
      <Spacer size={1} />
      <Typography variant="h6" gutterBottom>
        {t("terms.section7.title")}
      </Typography>
      <Typography variant="body1">{t("terms.section7.content")}</Typography>
      <Spacer size={1} />
      <Typography variant="h6" gutterBottom>
        {t("terms.section8.title")}
      </Typography>
      <Typography variant="body1">
        {t("terms.section8.content")}
        <MuiLink href="mailto:info@c-azahar.com">info@c-azahar.com</MuiLink>
      </Typography>
    </Paper>
  );
};

export default MainContent;
