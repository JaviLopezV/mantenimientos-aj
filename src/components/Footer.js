"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Link as MuiLink,
  IconButton,
  CssBaseline,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppButton from "./Whatsapp";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const FooterInfo = ({ currentLocale }) => {
  const t = useTranslations();
  const router = useRouter();
  const navigate = (path) => {
    router.push(`/${currentLocale}${path}`);
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1c1c1c",
        color: "#fff",
        pt: 6,
        backgroundImage:
          "repeating-linear-gradient(45deg, #1c1c1c 0px, #1c1c1c 2px, #191919 2px, #191919 4px)",
      }}
    >
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Logo y direcciones */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              fontStyle="italic"
              fontWeight="bold"
              mb={2}
              textAlign={{ xs: "center", md: "left" }}
            >
              AJ MANTENIMIENTOS
            </Typography>

            <Box display="flex" alignItems="flex-start" mb={2}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Box>
                <Typography fontWeight="bold">{t("headOffice")}:</Typography>
                <Typography variant="body2">
                  C. del Cid, 16
                  <br />
                  <strong>12500 Vinaròs, Castellón</strong>
                  <br />
                  <br />
                  Av. Castellón 3
                  <br />
                  Es: L, Pl: 0, Pt: 9s
                  <br />
                  <strong>12320 Sant Jordi, Castellón</strong>
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="flex-start" mb={2}>
              <LocationOnIcon sx={{ mr: 1 }} />
              <Box>
                <Typography fontWeight="bold">
                  {t("servicesAvailableIn")}
                </Typography>
                <Typography variant="body2">Madrid - Barcelona</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Contacto */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              mb={1}
              textAlign={{ xs: "center", md: "left" }}
            >
              {t("contactInfo")}
            </Typography>
            <Divider
              sx={{
                width: { xs: "60%", md: 160 },
                mb: 2,
                borderColor: "#fff",
                mx: { xs: "auto", md: "0" },
              }}
            />

            <Box display="flex" alignItems="flex-start" mb={2}>
              <SupportAgentIcon sx={{ mr: 1, mt: 0.5 }} />
              <Box>
                <Typography fontWeight="bold" variant="h6">
                  {t("phoneNumber")}
                </Typography>
                <Typography fontWeight="bold" variant="h6">
                  +34 964 848 711
                </Typography>
                <Typography variant="body2">{t("directSupport")}</Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="flex-start">
              <AccessTimeIcon sx={{ mr: 1, mt: 0.5 }} />
              <Box>
                <Typography fontWeight="bold" variant="body2">
                  {t("officeHours")}
                </Typography>
                <Typography variant="body2">{t("emergencyService")}</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Redes sociales y logos */}
          <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="body1" mb={2}>
              {t("followUs")}
            </Typography>

            <Box
              display="flex"
              justifyContent={{ xs: "center", md: "flex-start" }}
              gap={1}
              mb={3}
            >
              {/* <IconButton color="inherit" size="large">
                <FacebookIcon />
              </IconButton> */}
              <IconButton
                color="inherit"
                size="large"
                component="a"
                href="https://www.instagram.com/ajmantenimientos?igsh=MTBsc2Jqcmd3ZXloNw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </IconButton>

              {/* <IconButton color="inherit" size="large">
                <YouTubeIcon />
              </IconButton> */}

              <WhatsAppButton />
            </Box>
            {/* 
            <Typography variant="body1" mb={1}>
              Asociados a:
            </Typography>

            <Box
              display="flex"
              justifyContent={{ xs: "center", md: "flex-start" }}
              gap={2}
              flexWrap="wrap"
            >
              <Box
                component="img"
                src="/images/logo-aerme.png"
                alt="aerme"
                sx={{ height: 40 }}
              />
              <Box
                component="img"
                src="/images/logo2.jpg"
                alt="logo2"
                sx={{ height: 40 }}
              />
              <Box
                component="img"
                src="/images/logo-cirma.png"
                alt="cirma"
                sx={{ height: 40 }}
              />
            </Box> */}
          </Grid>
        </Grid>
      </Container>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 5 },
          pt: 5,
          textAlign: { sm: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
            py: { xs: 4, sm: 4 },
            width: "100%",
          }}
        >
          <div>
            <MuiLink
              sx={{ color: "white" }}
              color="text.secondary"
              variant="body2"
              onClick={() => navigate("/privacy-policy")}
            >
              {t("privacy_policy_title")}
            </MuiLink>
            <Typography sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <MuiLink
              sx={{ color: "white" }}
              color="text.secondary"
              variant="body2"
              onClick={() => navigate("/terms")}
            >
              {t("terms.title")}
            </MuiLink>
            <Copyright />
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterInfo;

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "white", mt: 3 }}>
      {"Copyright © Javier López Villanueva - "}
      {new Date().getFullYear()}
    </Typography>
  );
}
