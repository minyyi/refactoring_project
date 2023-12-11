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
  },
});

declare module "@mui/material/styles" {
  interface TypographyVariants {
    footer: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    footer?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    footer: true;
  }
}
// dark: #001a28
