import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const initialData = {
  first_name: "",
  last_name: "",
  email: "",
  address1: "",
  city: "",
  postcode: "",
  message: "",
};

export default function useQuoteLogic() {
  const [contactForm, setContactForm] = useState(initialData);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showSendAlert, setShowSendAlert] = useState(false);
  const [showTermsAlert, setShowTermsAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const closeAlert = (alert) => {
    if (alert === "send") setShowSendAlert(false);
    if (alert === "terms") setShowTermsAlert(false);
    if (alert === "error") setShowErrorAlert(false);
  };

  const handleCheckboxChange = (e) => {
    setAcceptedTerms(e.target.checked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!acceptedTerms) {
      setShowTermsAlert(true);
      return;
    }

    const emailConfig = [
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    ];

    if (emailConfig.some((value) => !value)) {
      setShowErrorAlert(true);
      return;
    }

    setIsSubmitting(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        contactForm,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setContactForm(initialData);
          setShowSendAlert(true);
          setAcceptedTerms(false);
          setShowErrorAlert(false);
          setShowTermsAlert(false);
          setIsSubmitting(false);
        },
        () => {
          setShowErrorAlert(true);
          setIsSubmitting(false);
        },
      );
  };
  return {
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
  };
}
