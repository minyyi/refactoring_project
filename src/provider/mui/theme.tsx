import { PaletteMode } from '@mui/material';
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#ecf6fd',
            // dark: '#263238',
            // contrastText: grey[500],
          },
          secondary: {
            main: '#e6e6fa',
            dark: '#cebfe7',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#001a28',
            // dark: '#263238',
          },
          secondary: {
            main: '#372a4e',
          },
          background: {
            default: '#717171',
          },
        }),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '--TextField-brandBorderColor': '#E0E3E7',
          '--TextField-brandBorderHoverColor':
            mode === 'light' ? '#001a28' : '#fff',
          '& label.Mui-focused': {
            color: 'var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
  },
});

export default getDesignTokens;
