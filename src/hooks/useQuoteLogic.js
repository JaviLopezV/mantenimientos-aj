import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const initialData = {
  first_name: "",
  last_name: "",
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

    if (!acceptedTerms) {
      setShowTermsAlert(true);
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_API_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_API_EMAILJS_TEMPLATE_ID,
        contactForm,
        import.meta.env.VITE_API_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setContactForm(initialData);
          setAcceptedTerms(false);
          setShowSendAlert(true);
        },
        () => {
          setShowErrorAlert(true);
        }
      );
  };
  return {
    contactForm,
    acceptedTerms,
    showSendAlert,
    showTermsAlert,
    showErrorAlert,
    closeAlert,
    handleCheckboxChange,
    handleChange,
    sendEmail,
  };
}
