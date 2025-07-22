"use client";

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Container,
  Paper,
  Button,
} from "@mui/material";
import FireExtinguisherIcon from "@mui/icons-material/FireExtinguisher";
import BuildIcon from "@mui/icons-material/Build";
import SecurityIcon from "@mui/icons-material/Security";
import { useTranslations } from "next-intl";
import Spacer from "@/components/Spacer";

const FireMaintenanceInstallations = ({ setOpen }) => {
  const t = useTranslations();

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        py: { xs: 3, md: 5 },
        px: { xs: 2, md: 0 },
        borderRadius: 4,
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: { xs: "center", md: "left" } }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          {t("fireMaintainceTitle")}
        </Typography>

        <Typography variant="h6" color="text.secondary" paragraph>
          {t("fireMaintainceSubtitle")}
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={4}>
          {t("fireMaintainceDescription")}
        </Typography>

        <Grid container spacing={4} justifyContent={"center"}>
          {/* Instalaciones */}
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ borderRadius: 4 }}>
              <CardContent>
                <FireExtinguisherIcon
                  color="error"
                  sx={{ fontSize: 40, mb: 2 }}
                />
                <Typography variant="h6" gutterBottom>
                  {t("installations.title")}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {t("installations.description")}
                  <ul>
                    <li>{t("installations.items.item1")}</li>
                    <li>{t("installations.items.item2")}</li>
                    <li>{t("installations.items.item3")}</li>
                    <li>{t("installations.items.item4")}</li>
                    <li>{t("installations.items.item5")}</li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Mantenimiento */}
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ borderRadius: 4 }}>
              <CardContent>
                <BuildIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  {t("maintenance.title")}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {t("maintenance.description")}
                  <ul>
                    <li>{t("maintenance.items.item1")}</li>
                    <li>{t("maintenance.items.item2")}</li>
                    <li>{t("maintenance.items.item3")}</li>
                    <li>{t("maintenance.items.item4")}</li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Beneficios */}
        <Box mt={6}>
          <Card elevation={1} sx={{ p: 4, pb: 3, borderRadius: 4 }}>
            <Typography variant="h6" gutterBottom>
              {t("benefits.title")}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2" color="text.secondary">
              <ul>
                <li>{t("benefits.items.item1")}</li>
                <li>{t("benefits.items.item2")}</li>
                <li>{t("benefits.items.item3")}</li>
                <li>{t("benefits.items.item4")}</li>
              </ul>
            </Typography>
            <SecurityIcon sx={{ fontSize: 32, mt: 2 }} color="success" />
          </Card>
        </Box>

        <Spacer size={1} />

        <Button variant="contained" onClick={() => setOpen(true)}>
          {t("requestInspection")}
        </Button>
      </Container>
    </Paper>
  );
};

export default FireMaintenanceInstallations;
