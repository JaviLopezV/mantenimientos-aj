"use client";

import { IconButton, Typography } from "@jlopvil/mui-kit";
import { useTranslations } from "next-intl";
import React from "react";
import { Box } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const ImageCarouselSwiper = ({ slides }) => {
  const t = useTranslations();
  return (
    <Box sx={{ position: "relative", borderRadius: 2, overflow: "hidden" }}>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 4000 }}
        loop
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        style={{ width: "100%", height: "80vh" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={slide.img}
              alt={slide.text || `slide-${index}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                backgroundColor: "black",
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
          </SwiperSlide>
        ))}

        {/* Custom flechas */}
        <IconButton
          className="custom-prev"
          sx={{
            position: "absolute",
            top: "50%",
            left: 20,
            transform: "translateY(-50%)",
            zIndex: 10,
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
          }}
        >
          <ArrowBackIosNew />
        </IconButton>

        <IconButton
          className="custom-next"
          sx={{
            position: "absolute",
            top: "50%",
            right: 20,
            transform: "translateY(-50%)",
            zIndex: 10,
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Swiper>
    </Box>
  );
};

export default ImageCarouselSwiper;
