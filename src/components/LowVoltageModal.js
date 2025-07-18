// components/FormModal.tsx

"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import {
  Modal,
  Box,
  Button,
  Typography,
  IconButton,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Spacer from "./Spacer";
import useQuoteLogic from "../hooks/useQuoteLogic";
import MainContent from "../app/[locale]/quote/components/MainContent";

const style = {
  position: "absolute",
  bottom: 50,
  left: "25%",
  transform: "translateX(-50%)",
  width: {
    xs: 300,
    md: 700,
  },
  bgcolor: "background.paper",
  borderRadius: "12px 12px 0 0", // borde redondeado arriba para parecer un drawer
  boxShadow: 24,
  p: 3,
};

export default function FormModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const t = useTranslations();

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

  return (
    <>
      <Spacer size={2} />
      <Button variant="contained" onClick={handleOpen}>
        {t("requestInspection")}
      </Button>
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Slide
          direction={open ? "up" : "down"}
          in={open}
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 700, exit: 700 }}
        >
          <Box sx={style}>
            <Box display="flex" justifyContent="end" alignItems="center">
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Box component={"form"} onSubmit={sendEmail}>
              <Typography variant={"h4"} gutterBottom mb={1}>
                {t("requestLowVoltageInspection")}
              </Typography>
              <MainContent
                showTitle={false}
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
          </Box>
        </Slide>
      </Modal>
    </>
  );
}
