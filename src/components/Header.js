"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Box,
  Button,
  CssBaseline,
} from "@mui/material";
import { useTransition } from "react";

const locales = ["en", "es", "ca", "de", "fr"];

export default function Header({ currentLocale }) {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const changeLocale = (newLocale) => {
    const segments = pathname.split("/");
    segments[1] = newLocale; // replace locale
    const newPath = segments.join("/");
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <AppBar position="static">
      <CssBaseline />

      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Navigation */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} href={`/${currentLocale}`}>
            {t("home")}
          </Button>
          <Button
            color="inherit"
            component={Link}
            href={`/${currentLocale}/contact`}
          >
            {t("contact")}
          </Button>
          <Button
            color="inherit"
            component={Link}
            href={`/${currentLocale}/products`}
          >
            {t("products")}
          </Button>
        </Box>

        {/* Language Switcher */}
        <Select
          value={currentLocale}
          onChange={(e) => changeLocale(e.target.value)}
          sx={{ color: "white", borderColor: "white" }}
          variant="standard"
        >
          {locales.map((locale) => (
            <MenuItem key={locale} value={locale}>
              {locale.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </Toolbar>
    </AppBar>
  );
}
