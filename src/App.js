/*
- File Name: App.js
- Author: shrouk ahmed
- Date of Creation: 17/9/2024
- Versions Information: 1.0.0
- Dependencies:
  {
  REACT , 
  react-router-dom ,
  SideBar file
  }
- Contributors: shrouk ahmed,Nourhan khaled
- Last Modified Date: 17/10/2024
- Description : 
*/
import React, { useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";

export default function MiniDrawer() {
  
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(localStorage.getItem("currentMode") || "light");

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("currentMode", newMode);
  };

  // إعداد الثيم بناءً على الوضع الحالي
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark" && {
            background: {
              default: "#121212", // خلفية الصفحة بالكامل
              paper: "#1e1e1e",   // خلفية العناصر مثل الكروت وغيرها
            },
            text: {
              primary: "#e0e0e0",  // لون النصوص الرئيسية
              secondary: "#b3b3b3", // لون النصوص الثانوية
            },
            primary: {
              main: "#bb86fc",  // لون البرايمري الرئيسي
            },
            secondary: {
              main: "#03dac6",  // لون السكندري الرئيسي
            },
            error: {
              main: "#cf6679",  // لون الخطأ
            },
          }),
          ...(mode === "light" && {
            background: {
              default: "#ffffff",
              paper: "#f5f5f5",
            },
            text: {
              primary: "#000000",
            },
          }),
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <TopBar open={open} handleDrawerOpen={handleDrawerOpen} toggleMode={toggleMode} mode={mode} />
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />
        <Box sx={{ flexGrow: 1, mt: "45px", backgroundColor: theme.palette.background.default }}>
          <Box component="main">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

