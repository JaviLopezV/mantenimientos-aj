"use client";

import React, { useState } from "react";
import { Fade, Box } from "@mui/material";
import ContactForm from "./components/ContactForm";
import ContactUs from "./components/ContactUs";
import WhereAreWe from "./components/WhereAreWe";

import Section from "../../../components/Section";

const backgroundImages = {
  contactUs: "/images/home-bg-3.jpg",
  whereAreWe: "/images/home-bg-2.png",
  contactForm: "/images/home-bg-1.jpg",
};

export default function Contact() {
  const [activeSection, setActiveSection] = useState("contactUs");

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

      <Section id="contactUs" onInView={handleInView("contactUs")}>
        <ContactUs />
      </Section>

      <Section
        isLeft={true}
        id="whereAreWe"
        onInView={handleInView("whereAreWe")}
      >
        <WhereAreWe />
      </Section>

      <Section id="contactForm" onInView={handleInView("contactForm")}>
        <ContactForm />
      </Section>
    </Box>
  );
}
