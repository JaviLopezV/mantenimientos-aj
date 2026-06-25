"use client";

import { useEffect, useState } from "react";
import { Button, Slide, Paper, Stack } from "@mui/material";
import { useTranslations } from "next-intl";

function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(
    navigator.userAgent,
  );
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    if (!isMobileDevice()) return;

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      console.log("App instalada");
    } else {
      console.log("Instalación rechazada");
    }
    setDeferredPrompt(null);
    setShowInstall(false);
  };

  const handleDismiss = () => {
    setDeferredPrompt(null);
    setShowInstall(false);
  };

  return (
    <Slide direction="up" in={showInstall} mountOnEnter unmountOnExit>
      <Paper
        elevation={6}
        sx={{
          position: "fixed",
          bottom: 16,
          left: "0%",
          transform: "translateX(-50%)",
          padding: 2,
          zIndex: 1300,
        }}
      >
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary" onClick={handleInstall}>
            {t("install_app")}
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleDismiss}>
            {t("no_thanks")}
          </Button>
        </Stack>
      </Paper>
    </Slide>
  );
}
