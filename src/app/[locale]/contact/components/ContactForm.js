"use client";

import { Container, Box, Typography } from "@mui/material";

import QuoteMainContent from "../../quote/components/MainContent";
import useQuoteLogic from "../../../../hooks/useQuoteLogic";
import { useTranslations } from "next-intl";

export default function MainContent() {
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
    <Box
      component={"form"}
      onSubmit={sendEmail}
      sx={{ backgroundColor: "#fafafa", py: 3, borderRadius: 2 }}
    >
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Typography variant={"h4"} gutterBottom>
          {t("supportMessageContact")}
        </Typography>
        <QuoteMainContent
          contactForm={contactForm}
          acceptedTerms={acceptedTerms}
          showSendAlert={showSendAlert}
          showTermsAlert={showTermsAlert}
          showErrorAlert={showErrorAlert}
          closeAlert={closeAlert}
          handleCheckboxChange={handleCheckboxChange}
          handleChange={handleChange}
        />
      </Container>
    </Box>
  );
}
