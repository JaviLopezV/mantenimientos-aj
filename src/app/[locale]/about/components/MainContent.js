"use client";

import { useTranslations } from "next-intl";
import React from "react";
import {
  Container,
  Typography,
  Paper,
  useMediaQuery,
  Box,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  backgroundColor: theme.palette.grey[100],
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius * 2,
}));

export default function AboutPage() {
  const t = useTranslations("aboutPage");
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.down("sm"));

  const Content = (
    <>
      <Typography variant="body1">
        <p>
          {t.rich("title", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </Typography>

      <Typography variant="body1">
        <p>
          {t.rich("paragraph1", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </Typography>

      <Typography variant="body1">
        <p>
          {t.rich("paragraph2", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </Typography>

      <Typography variant="body1">
        <p>
          {t.rich("paragraph3", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </Typography>

      <Typography variant="body1">
        <p>
          {t.rich("paragraph4", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
      </Typography>

      <Typography
        variant="h6"
        sx={{ mt: 4, fontStyle: "italic", color: "primary.main" }}
      >
        {t("slogan")}
      </Typography>
    </>
  );

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        px: { xs: 2, md: 0 },
        borderRadius: 2,
      }}
    >
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {isMdUp ? (
          <Box>{Content}</Box> // solo contenido sin StyledPaper
        ) : (
          <StyledPaper>{Content}</StyledPaper> // StyledPaper solo para xs-sm
        )}
      </Container>
    </Paper>
  );
}
