"use client";

import React, { useState } from "react";
import { Fade, Box } from "@mui/material";
import MainContent from "./components/MainContent";

import useQuoteLogic from "../../../hooks/useQuoteLogic";
import Section from "../../../components/Section";

const backgroundImages = {
  home: "/images/home-bg-3.jpg",
  about: "/images/home-bg-2.png",
  services: "/images/home-bg-1.jpg",
};

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("home");
  const {
    contactForm,
    acceptedTerms,
    showSendAlert,
    showTermsAlert,
    showErrorAlert,
    closeAlert,
    handleCheckboxChange,
    handleChange,
    sendEmail,
  } = useQuoteLogic();

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
        <Box
          component={"form"}
          onSubmit={sendEmail}
          sx={{ backgroundColor: "#fafafa", py: 3, px: 3, borderRadius: 2 }}
        >
          <MainContent
            contactForm={contactForm}
            acceptedTerms={acceptedTerms}
            showSendAlert={showSendAlert}
            showTermsAlert={showTermsAlert}
            showErrorAlert={showErrorAlert}
            closeAlert={closeAlert}
            handleCheckboxChange={handleCheckboxChange}
            handleChange={handleChange}
          />
        </Box>
      </Section>
    </Box>
  );
}
