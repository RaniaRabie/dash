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
- Contributors: shrouk ahmed
- Last Modified Date: 17/10/2024
- Description : 
*/
import * as React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import SideBar from "./components/SideBar";
// import { getDesignTokens } from "./theme";
import { Outlet } from "react-router-dom";
import TopBar from './components/TopBar';

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = React.useState(localStorage.getItem("currentMode") || "light");
  // const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode}/>

        <SideBar 
// @ts-ignore
        open={open} handleDrawerClose={handleDrawerClose}
        />

        <Box sx={{flexGrow: 1, mt:"45px"}}>
          <Box component="main">
            <Outlet />
          </Box>
        </Box>

      </Box>
  );
}
