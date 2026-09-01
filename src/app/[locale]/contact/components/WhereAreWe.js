"use client";

import { Container, Typography } from "@jlopvil/mui-kit";
import { useTranslations } from "next-intl";
import { Paper, Box } from "@mui/material";

export default function MainContent() {
  const t = useTranslations();

  return (
    <>
      <Box
        sx={{ backgroundColor: "#fafafa", py: 3, borderRadius: 2 }}
        id="donde-estamos"
      >
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            {t("where_are_we")}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="textSecondary"
            paragraph
          >
            {t("location_description")}
          </Typography>
          <Paper
            elevation={3}
            sx={{
              overflow: "hidden",
              borderRadius: 2,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.887646455692!2d0.4732528758982104!3d40.477750551923364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a051d088041ce7%3A0x51ed0928023349d6!2sMantenimientos%20AJ!5e0!3m2!1ses!2ses!4v1788262524604!5m2!1ses!2ses"
              width="100%"
              height="450"
              allowFullScreen
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
