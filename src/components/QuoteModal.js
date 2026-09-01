"use client";

import { IconButton, Typography } from "@jlopvil/mui-kit";
import { useTranslations } from "next-intl";
import React from "react";
import { Modal, Box, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useQuoteLogic from "../hooks/useQuoteLogic";
import MainContent from "../app/[locale]/quote/components/MainContent";

export default function QuoteModal({ open, setOpen, title }) {
  const t = useTranslations();

  const {
    contactForm,
    acceptedTerms,
    showSendAlert,
    showTermsAlert,
    showErrorAlert,
    isSubmitting,
    closeAlert,
    handleCheckboxChange,
    handleChange,
    sendEmail,
  } = useQuoteLogic();

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, sm: 0 },
        }}
      >
        <Slide
          direction="up"
          in={open}
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 700, exit: 700 }}
        >
          <Box
            sx={{
              position: "relative",
              width: {
                xs: 400,
                sm: 550,
                md: 700,
              },
              maxHeight: "90vh", // <-- límite de alto para evitar desbordar
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 24,
              p: 3,
              overflowY: "auto", // <-- permite hacer scroll si el contenido crece
              outline: "none",
            }}
          >
            <Box display="flex" justifyContent="end" alignItems="center">
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Box component="form" onSubmit={sendEmail}>
              <Typography variant="h4" gutterBottom mb={1}>
                {t(title)}
              </Typography>
              <MainContent
                contactForm={contactForm}
                acceptedTerms={acceptedTerms}
                showSendAlert={showSendAlert}
                showTermsAlert={showTermsAlert}
                showErrorAlert={showErrorAlert}
                isSubmitting={isSubmitting}
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
