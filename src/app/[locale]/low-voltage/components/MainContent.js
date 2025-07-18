"use client";

import { useTranslations } from "next-intl";
import React from "react";
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Spacer from "@/components/Spacer";

export default function InspectionLowVoltageSection({ setOpen }) {
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
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{
          wordBreak: "break-word", // fuerza corte si es necesario
          overflowWrap: "break-word", // compatibilidad adicional
        }}
      >
        🔍 {t("lowVoltageInspection.title")}
      </Typography>

      <Typography variant="body1" gutterBottom>
        {t("lowVoltageInspection.intro1")}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {t("lowVoltageInspection.intro2")}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {t("lowVoltageInspection.purposes.title")}
      </Typography>
      <List>
        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={t("lowVoltageInspection.purposes.items.item1")}
          />
        </ListItem>

        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={t("lowVoltageInspection.purposes.items.item2")}
          />
        </ListItem>

        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={t("lowVoltageInspection.purposes.items.item3")}
          />
        </ListItem>

        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={t("lowVoltageInspection.purposes.items.item4")}
          />
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {t("lowVoltageInspection.inspectedItems.title")}
      </Typography>

      <List>
        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={t("lowVoltageInspection.inspectedItems.items.item1")}
          />
        </ListItem>

        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={t("lowVoltageInspection.inspectedItems.items.item2")}
          />
        </ListItem>

        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={t("lowVoltageInspection.inspectedItems.items.item3")}
          />
        </ListItem>

        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={t("lowVoltageInspection.inspectedItems.items.item4")}
          />
        </ListItem>

        <ListItem disablePadding sx={{ mb: 1 }}>
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={t("lowVoltageInspection.inspectedItems.items.item5")}
          />
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {t("lowVoltageInspection.whoPerforms.title")}
      </Typography>
      <Typography variant="body1">
        {t("lowVoltageInspection.whoPerforms.description")}
      </Typography>

      <Spacer size={1} />

      <Button mt={3} variant="contained" onClick={() => setOpen(true)}>
        {t("requestInspection")}
      </Button>
    </Paper>
  );
}
