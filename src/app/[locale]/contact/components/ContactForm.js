"use client";

import { useTranslations } from "next-intl";
import { Container, Box } from "@mui/material";

import QuoteMainContent from "../../quote/components/MainContent";
import useQuoteLogic from "../../../../hooks/useQuoteLogic";

export default function MainContent() {
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
        <QuoteMainContent
          showTitle1={false}
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
