import { PaletteMode } from "@mui/material";
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

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

// mode: "dark",

// dark: #001a28
// export default function ToggleColorMode() {
//   const [mode, setMode] = useState<"light" | "dark">("light");
//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
//       },
//     }),
//     []
//   );

//   const theme = useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//       }),
//     [mode]
//   );
//     }
