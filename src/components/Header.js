"use client";

import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  MenuItem,
  Drawer,
  Menu,
  Divider,
} from "@mui/material";
import {
  Home,
  Whatshot,
  FlashOn,
  Inventory2,
  Info,
  ContactMail,
  RequestQuote,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LanguageIcon from "@mui/icons-material/Language";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const locales = ["en", "es", "ca", "fr", "de"];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backdropFilter: "blur(12px)",
  backgroundColor:
    theme.palette.mode === "light"
      ? "rgba(255,255,255,0.85)"
      : "rgba(30,30,30,0.75)",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const NavButton = styled(Button)(({ theme }) => ({
  textTransform: "uppercase",
  fontWeight: 500,
  padding: "8px 16px",
  color: theme.palette.text.primary,
  transition: "all 0.3s ease",
  borderBottom: "2px solid transparent",
  "&:hover": {
    borderBottom: `2px solid ${theme.palette.error.main}`,
    backgroundColor: "transparent",
  },
}));

export default function AppAppBar({ currentLocale }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [langAnchorEl, setLangAnchorEl] = useState(null);

  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();

  const isActive = (path) => pathname === `/${currentLocale}${path}`;

  const navigate = (path) => {
    router.push(`/${currentLocale}${path}`);
  };

  const navItems = [
    { label: "home", path: "/" },
    {
      label: "navbar3",
      children: [
        { label: "fireMaintainceTitle", path: "/mantainance-fire-systems" },
        { label: "navbar4", path: "/low-voltage" },
      ],
    },
    { label: "products", path: "/products" },
    { label: "about", path: "/about" },
    { label: "contact", path: "/contact" },
    { label: "quote", path: "/quote" },
  ];

  const iconsMap = {
    home: <Home fontSize="small" />,
    fireMaintainceTitle: <Whatshot fontSize="small" />,
    navbar4: <FlashOn fontSize="small" />,
    products: <Inventory2 fontSize="small" />,
    about: <Info fontSize="small" />,
    contact: <ContactMail fontSize="small" />,
    quote: <RequestQuote fontSize="small" />,
  };

  const handleLangChange = (lng) => {
    const segments = pathname.split("/");
    segments[1] = lng;
    router.push(segments.join("/"));
    setLangAnchorEl(null);
    setDrawerOpen(false);
  };

  return (
    <StyledAppBar position="fixed" elevation={4} sx={{ bgcolor: "#2E2E2E" }}>
      <Box sx={{ px: { xs: 2, md: 4, lg: 8 } }}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* LOGOS */}
          <Box
            component="img"
            src="/logo.png"
            alt="Logo"
            sx={{
              display: { xs: "none", md: "flex" },
              height: 40,
              cursor: "pointer",
              pr: 2,
            }}
            onClick={() => navigate("/")}
          />
          <Box
            component="img"
            src="/logo2.png"
            alt="Logo"
            sx={{
              display: { xs: "flex", md: "none" },
              height: 55,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />

          {/* DESKTOP NAV */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) =>
              item.children ? (
                <Box
                  key={item.label}
                  onMouseEnter={(e) => setMenuAnchor(e.currentTarget)}
                  onMouseLeave={() => setMenuAnchor(null)}
                >
                  <NavButton
                    sx={{
                      color: "white",
                      borderBottom: isActive(item.path)
                        ? "2px solid #FF5252"
                        : "2px solid transparent",
                    }}
                  >
                    {t(item.label).toUpperCase()}
                  </NavButton>
                  <Menu
                    anchorEl={menuAnchor}
                    open={Boolean(menuAnchor)}
                    onClose={() => setMenuAnchor(null)}
                    PaperProps={{
                      sx: {
                        mt: 1,
                        borderRadius: 2,
                        bgcolor: "#2E2E2E",
                        color: "#fff",
                      },
                    }}
                  >
                    {item.children.map((child) => (
                      <MenuItem
                        key={child.path}
                        selected={isActive(child.path)}
                        onClick={() => {
                          navigate(child.path);
                          setMenuAnchor(null);
                        }}
                      >
                        {iconsMap[child.label]}
                        <Box ml={1}>{t(child.label).toUpperCase()}</Box>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <NavButton
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  sx={{
                    px: 0,
                    color: "white",
                    borderBottom: isActive(item.path)
                      ? "2px solid #FF5252"
                      : "2px solid transparent",
                  }}
                >
                  {iconsMap[item.label]}
                  <Box sx={{ ml: "4px" }}>{t(item.label).toUpperCase()}</Box>
                </NavButton>
              )
            )}
          </Box>

          {/* LANG SELECTOR DESKTOP */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              color="inherit"
              onClick={(e) => setLangAnchorEl(e.currentTarget)}
            >
              <LanguageIcon />
            </IconButton>
            <Menu
              sx={{ left: -20 }}
              anchorEl={langAnchorEl}
              open={Boolean(langAnchorEl)}
              onClose={() => setLangAnchorEl(null)}
            >
              {locales.map((lng) => (
                <MenuItem
                  key={lng}
                  sx={{ px: 1 }}
                  selected={lng === currentLocale}
                  onClick={() => handleLangChange(lng)}
                >
                  <Button
                    sx={{ textTransform: "none", fontSize: 10, px: 0 }}
                    color={"error"}
                    variant={lng === currentLocale ? "contained" : "text"}
                    size="small"
                  >
                    {lng.toUpperCase()}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* MOBILE MENU */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Drawer
              anchor="top"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                sx: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12 },
              }}
            >
              <Box sx={{ p: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <IconButton onClick={() => setDrawerOpen(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                {navItems.flatMap((item) =>
                  item.children ? (
                    item.children.map((child) => (
                      <MenuItem
                        key={child.path}
                        selected={isActive(child.path)}
                        onClick={() => {
                          navigate(child.path);
                          setDrawerOpen(false);
                        }}
                      >
                        {iconsMap[child.label]}
                        <Box ml={1}>{t(child.label)}</Box>
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem
                      key={item.path}
                      selected={isActive(item.path)}
                      onClick={() => {
                        navigate(item.path);
                        setDrawerOpen(false);
                      }}
                    >
                      {iconsMap[item.label]}
                      <Box ml={1}>{t(item.label)}</Box>
                    </MenuItem>
                  )
                )}

                <Divider sx={{ my: 2 }} />

                {locales.map((lng) => (
                  <Button
                    key={lng}
                    fullWidth
                    onClick={() => handleLangChange(lng)}
                    variant={lng === currentLocale ? "contained" : "outlined"}
                    color="primary"
                    sx={{ mb: 1 }}
                  >
                    {lng.toUpperCase()}
                  </Button>
                ))}
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Box>
    </StyledAppBar>
  );
}
