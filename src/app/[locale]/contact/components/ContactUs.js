"use client";

import { useTranslations } from "next-intl";
import { Container, Typography, Box, Link } from "@mui/material";

import Spacer from "../../../../components/Spacer";
import ImageCarousel from "../../home/components/ImageCarousel";

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
          {/* Imagen → replace with carousel */}
          <Box
            sx={{
              width: { xs: "100%", md: "70%" },
              borderRadius: 2,
              boxShadow: 3,
              mx: { xs: "auto", md: 0 },
              overflow: "hidden", // makes the border radius work nicely with the carousel
            }}
          >
            <ImageCarousel
              slides={[
                {
                  img: "/images/slides/contact/slide1.png",
                  text: "slide1",
                  isPortrait: false,
                },
                {
                  img: "/images/slides/contact/slide2.png",
                  text: "slide2",
                  isPortrait: false,
                },
                {
                  img: "/images/slides/contact/slide3.png",
                  text: "slide3",
                  isPortrait: false,
                },
              ]}
            />
          </Box>

          {/* Texto */}
          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
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
            <Typography variant="body1">+34 964 848 711</Typography>
            <Spacer size={1} />

            <Typography variant="subtitle1" color="text.primary">
              ✉️ {t("email")}
            </Typography>
            <Typography variant="body1">
              <Link href="mailto:info@c-azahar.com">info@c-azahar.com</Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
