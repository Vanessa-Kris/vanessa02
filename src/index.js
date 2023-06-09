import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ResponsiveAppBar from "./components/navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <React.StrictMode>
      <ResponsiveAppBar />
      <App />
    </React.StrictMode>
  </ThemeProvider>
);