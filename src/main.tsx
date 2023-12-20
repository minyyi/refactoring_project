import * as ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import ColorModeContextProvider from "./theme/Provider";

import Router from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ColorModeContextProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider>
  </ColorModeContextProvider>
);
