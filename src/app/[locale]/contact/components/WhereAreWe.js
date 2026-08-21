"use client";

import { useTranslations } from "next-intl";
import { Container, Paper, Typography, Box } from "@mui/material";

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.648073560148!2d0.37579917585450745!3d40.54936367141852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a05b36e48ec259%3A0x8048266cc6201b29!2sMantenimientos%20AJ!5e0!3m2!1ses!2ses!4v1787304434915!5m2!1ses!2ses"
              width="100%"
              height="450"
              allowfullscreen=""
              style={{ border: 0 }}
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </Paper>
        </Container>
      </Box>
    </>
  );
}
