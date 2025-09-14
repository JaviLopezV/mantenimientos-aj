"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Slider from "react-slick";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      right: 15,
      zIndex: 2,
      color: "white",
      backgroundColor: "rgba(0,0,0,0.5)",
      "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
      transform: "translateY(-50%)",
      width: 50,
      height: 50,
      borderRadius: "50%",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: 15,
      zIndex: 2,
      color: "white",
      backgroundColor: "rgba(0,0,0,0.5)",
      "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
      transform: "translateY(-50%)",
      width: 50,
      height: 50,
      borderRadius: "50%",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    }}
  >
    <ArrowBackIosNew />
  </IconButton>
);

const ImageCarousel = ({ slides }) => {
  const t = useTranslations();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 900,
    fade: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <Box
        sx={{
          position: "absolute",
          bottom: 15,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: 0, padding: 0, display: "flex", gap: 10 }}>
          {dots}
        </ul>
      </Box>
    ),
    customPaging: () => (
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          backgroundColor: "white",
          opacity: 0.6,
          transition: "all 0.3s ease",
          "&:hover": { opacity: 1, transform: "scale(1.2)" },
        }}
      />
    ),
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
        "& .slick-slide img": {
          transition: "transform 1s ease",
        },
        "& .slick-active img": {
          transform: "scale(1.03)", // efecto zoom-in en el slide activo
        },
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} position="relative">
            <Box
              component="img"
              src={slide.img}
              alt={slide.text || `slide-${index}`}
              sx={
                slide.exception
                  ? {
                      width: "auto",
                      height: "80vh",
                      maxHeight: "80vh",
                      objectFit: "cover",
                      display: "block",
                      margin: "0 auto",
                    }
                  : slide.isPortrait
                  ? {
                      width: "auto",
                      height: "80vh",
                      maxHeight: "80vh",
                      objectFit: "cover",
                      display: "block",
                      margin: "0 auto",
                    }
                  : {
                      width: "100%",
                      height: "auto",
                      maxHeight: "80vh",
                      objectFit: "cover",
                      display: "block",
                      margin: "0 auto",
                    }
              }
            />

            {slide.text && (
              <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  background:
                    "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
                  px: 2,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant={"h3"}
                  color="white"
                  sx={{
                    textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
                    fontWeight: 500,
                    fontSize: { xs: "1.2rem", sm: "2.5rem" },
                  }}
                >
                  {t(slide.text)}
                </Typography>
              </Box>
            )}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
