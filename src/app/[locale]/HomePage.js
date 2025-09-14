"use client";

import React, { useState } from "react";
import { Fade, Box } from "@mui/material";
import MainContent from "./about/components/MainContent";
import ImageCarousel from "./home/components/ImageCarousel";
import AboutSection from "./home/components/AboutSection";
import Section from "../../components/Section";

const backgroundImages = {
  home: "/images/home-bg-1.jpg",
  about: "/images/home-bg-3.jpg",
  services: "/images/home-bg-2.png",
};

// import { useLocale } from "next-intl";
export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");
  // const locale = useLocale();
  // console.log("🚀 ~ HomePage ~ locale:", locale);

  const handleInView = (section) => (inView) => {
    if (inView) setActiveSection(section);
  };

  return (
    <Box sx={{ position: "relative", overflowX: "hidden", width: "100%" }}>
      {/* Background with fade transitions */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
        }}
      >
        {Object.entries(backgroundImages).map(([key, image]) => (
          <Fade in={activeSection === key} timeout={1500} key={key}>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "opacity 1s ease-in-out",
              }}
            />
          </Fade>
        ))}
      </Box>

      <Section id="about" onInView={handleInView("about")}>
        <MainContent />
      </Section>

      <Section isLeft={true} id="services" onInView={handleInView("services")}>
        <ImageCarousel
          slides={[
            {
              img: "/images/slides/home/slide1.jpg",
              isPortrait: false,
              exception: true,
            },
            {
              img: "/images/slides/home/slide2.jpg",
              isPortrait: false,
              exception: true,
            },
            { img: "/images/slides/home/slide3.jpg", isPortrait: true },
            { img: "/images/slides/home/slide4.jpg", isPortrait: true },
          ]}
        />
      </Section>

      {/* Sections */}
      <Section id="home" onInView={handleInView("home")}>
        <AboutSection />
      </Section>
    </Box>
  );
}
