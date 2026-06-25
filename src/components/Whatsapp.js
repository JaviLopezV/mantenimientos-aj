import React from "react";
import { IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppButton = () => {
  const phoneNumber = "34744783411"; // Reemplaza con tu número internacional
  const message = "Hola, quiero más información"; // Mensaje opcional
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
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
