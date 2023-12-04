import React from "react";
import * as ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Main />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
