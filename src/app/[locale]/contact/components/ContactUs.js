"use client";

import { useTranslations } from "next-intl";
import { Container, Typography, Box, Link } from "@mui/material";

import Spacer from "../../../../components/Spacer";

export default function MainContent() {
  const t = useTranslations();

  return (
    <Box sx={{ backgroundColor: "#fafafa", py: 3, borderRadius: 2 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {/* Imagen */}
          <Box
            component="img"
            src="/images/company-face.jpg"
            alt="Contacto"
            sx={{
              width: { xs: "100%", md: "50%" },
              height: "auto",
              borderRadius: 2,
              boxShadow: 3,
              mx: { xs: "auto", md: 0 },
              display: "block",
            }}
          />

          {/* Texto */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h4" gutterBottom>
              {t("contact_us")}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {t("contact_intro")}
            </Typography>

            <Typography variant="subtitle1" color="text.primary">
              📞 {t("phone")}
            </Typography>
            <Typography variant="body1">+34 964 880 171</Typography>
            <Spacer size={1} />

            <Typography variant="subtitle1" color="text.primary">
              ✉️ {t("email")}
            </Typography>
            <Typography variant="body1">
              <Link href="mailto:info@extintorespanoramica.com">
                info@extintorespanoramica.com
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
