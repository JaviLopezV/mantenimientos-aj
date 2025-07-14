"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Grid,
  Typography,
  Fade,
  Card,
  CardMedia,
  CardContent,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const categoryKeys = [
  "fireDetection",
  "alarmsAndSignaling",
  "fireExtinction",
  "waterSystems",
  "personalProtection",
  "inspectionAndMeasurement",
  "maintenance",
  "documentationAndSignage",
  "complementarySystems",
];

const products = {
  fireDetection: [
    { name: "smokeDetector", image: "/images/extintor.png" },
    { name: "manualStation", image: "/images/extintor.png" },
  ],
  alarmsAndSignaling: [
    { name: "strobeSiren", image: "/images/extintor.png" },
    { name: "alarmPanel", image: "/images/extintor.png" },
  ],
  fireExtinction: [
    { name: "co2Extinguisher", image: "/images/extintor.png" },
    { name: "fm200System", image: "/images/extintor.png" },
  ],
  waterSystems: [
    { name: "outdoorHydrant", image: "/images/extintor.png" },
    { name: "bie25mm", image: "/images/extintor.png" },
  ],
  personalProtection: [
    { name: "scba", image: "/images/extintor.png" },
    { name: "fireResistantGloves", image: "/images/extintor.png" },
  ],
  inspectionAndMeasurement: [
    { name: "thermalCamera", image: "/images/extintor.png" },
    { name: "digitalMultimeter", image: "/images/extintor.png" },
  ],
  maintenance: [
    { name: "extinguisherRechargeKit", image: "/images/extintor.png" },
    { name: "hydrantWrench", image: "/images/extintor.png" },
  ],
  documentationAndSignage: [
    { name: "evacuationPlan", image: "/images/extintor.png" },
    { name: "extinguisherSign", image: "/images/extintor.png" },
  ],
  complementarySystems: [
    { name: "emergencyLighting", image: "/images/extintor.png" },
    { name: "gasCutOffSystem", image: "/images/extintor.png" },
  ],
};

export default function ProductSections() {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        minHeight: "100vh",
        p: { xs: 2, sm: 2, md: 3 },
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
      }}
    >
      {/* Sidebar / Dropdown */}
      <Box
        sx={{
          width: { sm: "100%", md: 240 },
          mr: { md: 4 },
          mb: { sm: 2, md: 0 },
          pr: { md: 2 },
          borderRight: { md: "1px solid #e0e0e0" },
        }}
      >
        {isMobile ? (
          <Select
            fullWidth
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            variant="outlined"
            sx={{
              mb: 2,
              fontSize: "1rem",
              fontWeight: 500,
              letterSpacing: "0.5px",
              borderRadius: 2,
              bgcolor: "#fff",
              boxShadow: 1,
              "& .MuiSelect-select": {
                py: 1.5,
                px: 2,
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  borderRadius: 2,
                  boxShadow: 4,
                  mt: 1,
                },
              },
            }}
          >
            {categoryKeys.map((cat) => (
              <MenuItem
                key={cat}
                value={cat}
                sx={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  letterSpacing: "0.4px",
                  px: 2,
                  py: 1.2,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "primary.light",
                    color: "white",
                  },
                }}
              >
                {t(`categories.${cat}`)}
              </MenuItem>
            ))}
          </Select>
        ) : (
          <>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {t("categories.title")}
            </Typography>

            <List>
              {categoryKeys.map((cat) => (
                <ListItemButton
                  key={cat}
                  selected={cat === selectedCategory}
                  onClick={() => setSelectedCategory(cat)}
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                    px: 2,
                    py: 1,
                    "&.Mui-selected": {
                      backgroundColor: "primary.main",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "primary.dark",
                      },
                    },
                  }}
                >
                  <ListItemText primary={t(`categories.${cat}`)} />
                </ListItemButton>
              ))}
            </List>
          </>
        )}
      </Box>

      {/* Productos */}
      <Box sx={{ flex: 1 }}>
        {!isMobile && (
          <Typography variant="h5" fontWeight={600} gutterBottom>
            {t(`categories.${selectedCategory}`)}
          </Typography>
        )}

        <Fade in={true} key={selectedCategory}>
          <Grid
            container
            spacing={3}
            sx={{
              justifyContent: { xs: "center", sm: "center", md: "left" },
            }}
          >
            {products[selectedCategory]?.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    width: { xs: "200px", sm: "220px" },
                    borderRadius: 4,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "0.3s",
                    height: "100%",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={t(`allProducts.${product.name}.name`)}
                    sx={{
                      objectFit: "cover",
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight={600}>
                      {t(`allProducts.${product.name}.name`)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={0.5}>
                      {t(`allProducts.${product.name}.description`)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Fade>
      </Box>
    </Box>
  );
}
