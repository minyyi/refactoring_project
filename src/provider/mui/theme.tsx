import { PaletteMode } from '@mui/material';
import { grey, yellow } from '@mui/material/colors';
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#ecf6fd',
            // contrastText: grey[500],
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
          },
          background: {
            default: '#717171',
          },
        }),
  },
});

export default getDesignTokens;
