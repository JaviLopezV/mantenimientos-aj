"use client";

import { useTranslations } from "next-intl";

import React from "react";
import Slider from "react-slick";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { img: "/images/slide1.png", text: "slide1" },
  { img: "/images/slide2.png", text: "slide2" },
  { img: "/images/slide3.png", text: "slide3" },
];

// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: 20,
        zIndex: 2,
        color: "white",
        backgroundColor: "rgba(0,0,0,0.3)",
        "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
        transform: "translateY(-50%)",
      }}
    >
      <ArrowForwardIos />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: 20,
        zIndex: 2,
        color: "white",
        backgroundColor: "rgba(0,0,0,0.3)",
        "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
        transform: "translateY(-50%)",
      }}
    >
      <ArrowBackIos />
    </IconButton>
  );
};

const ImageCarousel = () => {
  const t = useTranslations();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
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
          bottom: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: 0, padding: 0, display: "flex", gap: 8 }}>
          {dots}
        </ul>
      </Box>
    ),
    customPaging: () => (
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: "white",
          opacity: 0.6,
          "&:hover": { opacity: 1 },
        }}
      />
    ),
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        position: "relative",
        overflow: "hidden",
        "& .slick-slide img": {
          transition: "transform 1s ease",
        },
        "& .slick-slide:hover img": {
          transform: "scale(1.05)",
        },
        borderRadius: 2,
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box key={index} position="relative">
            <img
              src={slide.img}
              alt={slide.text}
              style={{
                width: "100%",
                height: "80vh",
                objectFit: "cover",
              }}
            />
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
                background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))",
              }}
            >
              <Typography
                variant="h3"
                color="white"
                sx={{
                  textAlign: "center",
                  textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
                  fontWeight: 500,
                }}
              >
                {t(slide.text)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
