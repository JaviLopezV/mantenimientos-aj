"use client";

import Grid from "@mui/material/GridLegacy";
import { Button, Container, Typography } from "@jlopvil/mui-kit";
import React from "react";
import { Box, Card, CardContent, Divider, Paper } from "@mui/material";
import FireExtinguisherIcon from "@mui/icons-material/FireExtinguisher";
import BuildIcon from "@mui/icons-material/Build";
import SecurityIcon from "@mui/icons-material/Security";
import { useTranslations } from "next-intl";
import Spacer from "@/components/Spacer";

const FireMaintenanceInstallations = ({ setOpen }) => {
  const t = useTranslations();

  return (
    <Paper
      component="section"
      elevation={3}
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        py: { xs: 4, md: 6 },
        px: { xs: 3, md: 0 },
        borderRadius: 4,
      }}
      aria-labelledby="fire-maintenance-title"
    >
      <Container maxWidth="lg" sx={{ textAlign: { xs: "center", md: "left" } }}>
        <Typography
          variant="h1"
          id="fire-maintenance-title"
          gutterBottom
          fontWeight="bold"
          component="h1"
          sx={{
            wordBreak: "break-word",
            overflowWrap: "break-word",
            fontSize: { xs: "1.8rem", md: "2.4rem" },
          }}
        >
          {t("fireMaintainceTitle")}
        </Typography>

        <Typography
          variant="h3"
          id="fire-maintenance-title-2"
          gutterBottom
          fontWeight="bold"
          component="h3"
          sx={{
            wordBreak: "break-word",
            overflowWrap: "break-word",
            fontSize: { xs: "1.6rem", md: "2rem" },
          }}
        >
          {t("valencianCommunity")}
        </Typography>

        <Typography
          variant="h5"
          color="text.secondary"
          paragraph
          component="h2"
          sx={{ fontWeight: "medium" }}
        >
          {t("fireMaintainceSubtitle")}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          mb={6}
          sx={{ mx: { xs: "auto", md: 0 } }}
        >
          {t("fireMaintainceDescription")}
        </Typography>

        <Grid container spacing={5} justifyContent="center">
          {/* Instalaciones */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={4}
              sx={{ borderRadius: 4, height: "100%" }}
              component="article"
              aria-labelledby="installations-title"
            >
              <CardContent>
                <FireExtinguisherIcon
                  color="error"
                  aria-hidden="true"
                  sx={{ fontSize: { xs: 42, md: 48 }, mb: 1 }}
                />
                <Typography
                  variant="h4"
                  gutterBottom
                  id="installations-title"
                  component="h3"
                  sx={{
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                    fontSize: { xs: "1.3rem", md: "1.6rem" },
                  }}
                >
                  {t("installations.title")}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body1" color="text.secondary" mt={2}>
                  {t("installations.description")}
                </Typography>
                <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                  <li>{t("installations.items.item1")}</li>
                  <li>{t("installations.items.item2")}</li>
                  <li>{t("installations.items.item3")}</li>
                  <li>{t("installations.items.item4")}</li>
                  <li>{t("installations.items.item5")}</li>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Mantenimiento */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={4}
              sx={{ borderRadius: 4, height: "100%" }}
              component="article"
              aria-labelledby="maintenance-title"
            >
              <CardContent>
                <BuildIcon
                  color="primary"
                  sx={{ fontSize: { xs: 42, md: 48 }, mb: 1 }}
                  aria-hidden="true"
                />
                <Typography
                  variant="h4"
                  gutterBottom
                  id="maintenance-title"
                  component="h3"
                  sx={{
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                    fontSize: { xs: "1.3rem", md: "1.6rem" },
                  }}
                >
                  {t("maintenance.title")}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body1" color="text.secondary" mt={2}>
                  {t("maintenance.description")}
                </Typography>
                <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                  <li>{t("maintenance.items.item1")}</li>
                  <li>{t("maintenance.items.item2")}</li>
                  <li>{t("maintenance.items.item3")}</li>
                  <li>{t("maintenance.items.item4")}</li>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Beneficios */}
        <Box mt={8} component="section" aria-labelledby="benefits-title">
          <Card elevation={2} sx={{ p: 4, borderRadius: 4 }}>
            <Typography
              variant="h4"
              gutterBottom
              id="benefits-title"
              component="h2"
            >
              {t("benefits.title")}
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <Box component="ul" sx={{ pl: 3, color: "text.secondary" }}>
              <li>{t("benefits.items.item1")}</li>
              <li>{t("benefits.items.item2")}</li>
              <li>{t("benefits.items.item3")}</li>
              <li>{t("benefits.items.item4")}</li>
            </Box>
            <SecurityIcon
              sx={{ fontSize: 40, mt: 3, color: "success.main" }}
              aria-hidden="true"
            />
          </Card>
        </Box>

        <Spacer size={2} />

        <Box textAlign={{ xs: "center", md: "left" }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => setOpen(true)}
            aria-label={t("requestInspection")}
          >
            {t("requestInspection")}
          </Button>
        </Box>
      </Container>
    </Paper>
  );
};

export default FireMaintenanceInstallations;
