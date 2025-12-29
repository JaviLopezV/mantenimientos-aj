"use client";

import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { Paper, Typography, Box, Link as MuiLink } from "@mui/material";

const MainContent = () => {
  const t = useTranslations();
  const locale = useLocale();

  const formattedDate = new Date(2025, 4, 22) // mes es 0-based
    .toLocaleDateString(locale, {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })
    .replace(/,/g, "");

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
        {t("privacy_policy_title")}
      </Typography>

      <Typography variant="body1">{t("intro")}</Typography>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          {t("responsible")}
        </Typography>
        <Typography variant="body1">
          <strong>{t("responsible_name")}</strong> Mantenimientos Panorámica AJ,
          S.L
          <br />
          <strong>{t("responsible_nif")}</strong> B75727412
          <br />
          <strong>{t("responsible_address")}</strong> Av. Castellón 3, Es: L,
          Pl: 0, Pt: 9 - 12320 Sant Jordi, Castellón
          <br />
          <strong>{t("responsible_email")}</strong>{" "}
          <MuiLink href="mailto:info@extintorespanoramica.com">
            info@extintorespanoramica.com
          </MuiLink>
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          {t("purpose")}
        </Typography>
        <Typography variant="body1">{t("purpose_content")}</Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          {t("legal")}
        </Typography>
        <Typography variant="body1">{t("legal_content")}</Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          {t("data")}
        </Typography>
        <Typography variant="body1">{t("data_content")}</Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          {t("recipients")}
        </Typography>
        <Typography variant="body1">{t("recipients_content_1")}</Typography>
        <Typography variant="body1">
          {t("recipients_content_2")}
          <br />
          {t("recipients_content_3")}
          <br />
          {t("recipients_content_4")}{" "}
          <a
            href="https://www.emailjs.com/legal/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.emailjs.com/legal/privacy-policy/
          </a>
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          {t("retention")}
        </Typography>
        <Typography variant="body1">{t("retention_content")}</Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          {t("rights")}
        </Typography>
        <Typography variant="body1">
          {t("rights_content")}{" "}
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aepd.es
          </a>
        </Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          {t("security")}
        </Typography>
        <Typography variant="body1">{t("security_content")}</Typography>
      </Box>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          {t("changes")}
        </Typography>
        <Typography variant="body1">
          {t("changes_content_1")}
          <br />
          {t("changes_content_2")}
          {formattedDate}
        </Typography>
      </Box>
    </Paper>
  );
};

export default MainContent;
