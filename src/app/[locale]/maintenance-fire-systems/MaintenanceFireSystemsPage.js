"use client";

import React, { useState } from "react";
import { Fade, Box } from "@mui/material";
import MainContent from "./components/MainContent";

import Section from "../../../components/Section";
import QuoteModal from "@/components/QuoteModal";

const backgroundImages = {
  home: "/images/home-bg-3.jpg",
  about: "/images/home-bg-2.png",
  services: "/images/home-bg-1.jpg",
};

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

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

      {/* Sections */}
      <Section id="home" onInView={handleInView("home")}>
        <MainContent setOpen={setOpen} />
      </Section>

      <QuoteModal
        open={open}
        setOpen={setOpen}
        title={"requestFireInspection"}
      />
    </Box>
  );
}
