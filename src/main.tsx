import React from "react";
import * as ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import Layout from "./component/layout/Layout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>
);
