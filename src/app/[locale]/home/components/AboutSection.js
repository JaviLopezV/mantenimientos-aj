"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";

export default function AboutSection() {
  const t = useTranslations();

  return (
    <Box sx={{ py: 3, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          direction={{ xs: "column", md: "row" }}
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: "center", md: "center" } }}>
              <Typography variant="h4" gutterBottom>
                {t("title_1")}
              </Typography>
              <Typography variant="body1">{t("title_2")}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://picsum.photos/600/400"
              alt="Equipo contra incendios"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                objectFit: "cover",
                display: "block",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
