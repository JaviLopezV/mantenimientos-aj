"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";

export default function AboutSection() {
  const t = useTranslations();

  return (
    <Box
      component="section"
      aria-labelledby="about-section-title"
      sx={{ py: 5, backgroundColor: "#f5f5f5", borderRadius: 2 }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          direction={{ xs: "column-reverse", md: "row" }}
        >
          {/* Texto */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: "center" } }}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                id="about-section-title"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "2.4rem", md: "2.8rem" },
                }}
              >
                {t("title_1")}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                {t("title_2")}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://picsum.photos/600/400"
              // alt={t("aboutImageAlt", "Equipo contra incendios")}
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                objectFit: "cover",
                display: "block",
                boxShadow: 3,
              }}
              loading="lazy"
              decoding="async"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
