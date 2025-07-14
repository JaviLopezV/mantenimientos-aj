"use client";

import { useTranslations } from "next-intl";
import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormLabel,
  Grid,
  TextField,
  Link as MuiLink,
  Typography,
  Button,
  Alert,
  Box,
} from "@mui/material";
import Spacer from "../../../../components/Spacer";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function MainContent({
  showTitle1 = true,
  contactForm,
  acceptedTerms,
  showSendAlert,
  showTermsAlert,
  showErrorAlert,
  closeAlert,
  handleCheckboxChange,
  handleChange,
}) {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const navigate = (path) => {
    router.push(`/${locale}${path}`);
  };
  return (
    <>
      <Typography variant={showTitle1 ? "h3" : "h4"} gutterBottom>
        {t(showTitle1 ? "contact_us" : "quote")}
      </Typography>

      {showErrorAlert && (
        <>
          <Spacer size={1} />
          <Alert onClose={() => closeAlert("error")} severity="error">
            {t("message_sent_error")}
          </Alert>
        </>
      )}
      {showSendAlert && (
        <>
          <Spacer size={1} />
          <Alert onClose={() => closeAlert("send")} severity="success">
            {t("message_sent_success")}
          </Alert>
        </>
      )}
      {showTermsAlert && (
        <>
          <Spacer size={1} />
          <Alert onClose={() => closeAlert("terms")} severity="warning">
            {t("accept_terms")}
          </Alert>
        </>
      )}

      <Box component="form" noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required
              id="first_name"
              name="first_name"
              label={t("first_name")}
              value={contactForm.first_name}
              onChange={handleChange}
              size="small"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required
              id="last_name"
              name="last_name"
              label={t("last_name")}
              value={contactForm.last_name}
              onChange={handleChange}
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="address1"
              name="address1"
              label={t("address_line")}
              value={contactForm.address1}
              onChange={handleChange}
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="city"
              name="city"
              label={`${t("city")}, ${t("postcode")}`}
              value={contactForm.city}
              onChange={handleChange}
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              multiline
              rows={4}
              id="message"
              name="message"
              label={t("message")}
              value={contactForm.message}
              onChange={handleChange}
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={acceptedTerms}
                  onChange={handleCheckboxChange}
                />
              }
              label={
                <Typography variant="body2">
                  {t("privacy_policy_reed")}{" "}
                  <MuiLink
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/privacy-policy");
                    }}
                    underline="hover"
                  >
                    {t("privacy_policy")}
                  </MuiLink>
                </Typography>
              }
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              sx={{ textTransform: "none", py: 1.5 }}
              variant="contained"
              color="primary"
              type="submit"
            >
              {t("send")}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
