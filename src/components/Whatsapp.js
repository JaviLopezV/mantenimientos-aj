import React from "react";
import { IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { company } from "../config/company";

const WhatsAppButton = () => {
  const message = "Hola, quiero más información"; // Mensaje opcional
  const whatsappLink = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <IconButton
      color="inherit"
      aria-label="Hablar por WhatsApp"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      size="large"
    >
      <WhatsAppIcon fontSize="inherit" />
    </IconButton>
  );
};

export default WhatsAppButton;
