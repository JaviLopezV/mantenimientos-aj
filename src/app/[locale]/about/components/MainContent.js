"use client";

import { Container, Typography } from "@jlopvil/mui-kit";
import { useTranslations } from "next-intl";
import React from "react";
import { Paper, useMediaQuery, Box } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  backgroundColor: theme.palette.grey[100],
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius * 2,
}));

export default function AboutPage() {
  const t = useTranslations();
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("sm"));

  const Content = (
    <>
      <Typography
        variant="h2"
        gutterBottom
        sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "2.8rem" } }}
      >
        {t.rich("companyName", {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
      </Typography>

      <Typography
        variant="h1"
        gutterBottom
        sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "2.4rem" } }}
      >
        {t.rich("aboutPage.title", {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
      </Typography>

      {["paragraph1", "paragraph2", "paragraph3", "paragraph4"].map((key) => (
        <Typography key={key} variant="body1" paragraph>
          {t.rich(`aboutPage.${key}`, {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </Typography>
      ))}

      <Typography
        variant="h6"
        sx={{ mt: 4, fontStyle: "italic", color: "primary.main" }}
      >
        {t("aboutPage.slogan")}
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
        {isMdDown ? <Box>{Content}</Box> : <StyledPaper>{Content}</StyledPaper>}
      </Container>
    </Paper>
  );
}
