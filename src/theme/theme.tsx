import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#292929",
      light: "#535353",
      dark: "#1c1c1c",
      // contrastText: main값을 통해 계산됨
    },
    secondary: {
      main: "#d1c4e9",
      light: "#dacfed",
      dark: "#9289a3",
      // contrastText: main값을 통해 계산됨
    },
  },
  typography: {
    button: {
      fontSize: 16,
      fontWeight: 600,
      color: "#292929",
    },
  },
});
