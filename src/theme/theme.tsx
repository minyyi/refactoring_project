import { createTheme } from "@mui/material/styles";

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
    // mode: "dark",
  },

  typography: {},
});

// const getDesignTokens = (mode: PaletteMode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           // palette values for light mode
//           primary: amber,
//           divider: amber[200],
//           text: {
//             primary: grey[900],
//             secondary: grey[800],
//           },
//         }
//       : {
//           // palette values for dark mode
//           primary: deepOrange,
//           divider: deepOrange[700],
//           background: {
//             default: deepOrange[900],
//             paper: deepOrange[900],
//           },
//           text: {
//             primary: "#fff",
//             secondary: grey[500],
//           },
//         }),
//   },
// });

// dark: #001a28
