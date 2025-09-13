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
      component="section"
      elevation={3}
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        p: { xs: 3, md: 5 },
        borderRadius: 4,
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        fontWeight="bold"
        gutterBottom
        sx={{
          wordBreak: "break-word",
          overflowWrap: "break-word",
          fontSize: { xs: "1.8rem", md: "2.4rem" },
        }}
      >
        {t("lowVoltageInspection.title")}
      </Typography>

      {["intro1"].map((key) => (
        <Typography key={key} variant="body1" paragraph>
          {t.rich(`lowVoltageInspection.${key}`, {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </Typography>
      ))}

      <Typography variant="body1" component="p" gutterBottom>
        {t("lowVoltageInspection.intro2")}
      </Typography>

      <Divider sx={{ my: 4 }} />

      <section>
        <Typography
          variant="h2"
          component="h2"
          fontWeight="bold"
          gutterBottom
          sx={{
            wordBreak: "break-word",
            overflowWrap: "break-word",
            fontSize: { xs: "1.8rem", md: "2.4rem" },
          }}
        >
          {t("lowVoltageInspection.purposes.title")}
        </Typography>

        <List component="ul">
          {[1, 2, 3, 4].map((i) => (
            <ListItem disablePadding sx={{ mb: 1 }} key={i} component="li">
              <ListItemIcon>
                <CheckCircleIcon color="primary" aria-hidden="true" />
              </ListItemIcon>
              <ListItemText
                primary={t(`lowVoltageInspection.purposes.items.item${i}`)}
              />
            </ListItem>
          ))}
        </List>
      </section>

      <Divider sx={{ my: 4 }} />

      <section>
        <Typography
          variant="h2"
          component="h2"
          fontWeight="bold"
          gutterBottom
          sx={{
            wordBreak: "break-word",
            overflowWrap: "break-word",
            fontSize: { xs: "1.8rem", md: "2.4rem" },
          }}
        >
          {t("lowVoltageInspection.inspectedItems.title")}
        </Typography>

        <List component="ul">
          {[1, 2, 3, 4, 5].map((i) => (
            <ListItem disablePadding sx={{ mb: 1 }} key={i} component="li">
              <ListItemIcon>
                <CheckCircleIcon color="primary" aria-hidden="true" />
              </ListItemIcon>
              <ListItemText
                primary={t(
                  `lowVoltageInspection.inspectedItems.items.item${i}`
                )}
              />
            </ListItem>
          ))}
        </List>
      </section>

      <Divider sx={{ my: 4 }} />

      <section>
        <Typography
          variant="h2"
          component="h2"
          fontWeight="bold"
          gutterBottom
          sx={{
            wordBreak: "break-word",
            overflowWrap: "break-word",
            fontSize: { xs: "1.8rem", md: "2.4rem" },
          }}
        >
          {t("lowVoltageInspection.whoPerforms.title")}
        </Typography>

        {["description"].map((key) => (
          <Typography key={key} variant="body1" paragraph>
            {t.rich(`lowVoltageInspection.whoPerforms.${key}`, {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </Typography>
        ))}
      </section>

      <Spacer size={1} />

      <Button mt={3} variant="contained" onClick={() => setOpen(true)}>
        {t("requestInspection")}
      </Button>
    </Paper>
  );
}
