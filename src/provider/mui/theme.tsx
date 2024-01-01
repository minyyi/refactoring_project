import { PaletteMode } from '@mui/material';
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#ecf6fd',
            dark: '#82b1ff',
            // contrastText: grey[500],
          },
          secondary: {
            main: '#ede7f6',
            dark: '#b39ddb',
          },
          typography: {
            button: {
              fontStyle: 'italic',
            },
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#001a28',
            dark: '#263238',
          },
          secondary: {
            main: '#372a4e',
          },
          background: {
            default: '#717171',
          },
        }),
  },
});

export default getDesignTokens;
