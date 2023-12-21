import { createTheme } from "@mui/material/styles";
// import { useMemo } from "react";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ecf6fd",
      light: "#eff7fd",
      dark: "#a5acb1",
      // contrastText: main값을 통해 계산됨
    },
    secondary: {
      main: "#ede7f6",
      light: "#f0ebf7",
      dark: "#a5a1ac",
      // contrastText: main값을 통해 계산됨
    },
  },
});


// mode: "dark",

// dark: #001a28
