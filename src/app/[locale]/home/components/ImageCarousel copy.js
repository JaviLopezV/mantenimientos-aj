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
    }}
  >
    <ArrowBackIosNew />
  </IconButton>
);

const ImageCarouselSlick = ({ slides }) => {
  const t = useTranslations();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box sx={{ position: "relative", borderRadius: 2, overflow: "hidden" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} sx={{ position: "relative" }}>
            <Box
              component="img"
              src={slide.img}
              alt={slide.text || `slide-${index}`}
              sx={{
                width: "100%",
                height: "80vh",
                objectFit: "contain", // soporta retrato y paisaje
                backgroundColor: "black", // relleno para retratos
              }}
            />
            {slide.text && (
              <Typography
                variant="h4"
                align="center"
                sx={{
                  position: "absolute",
                  bottom: 30,
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
                }}
              >
                {t(slide.text)}
              </Typography>
            )}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarouselSlick;
