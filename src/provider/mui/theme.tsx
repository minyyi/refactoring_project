import { PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary:{ 
            main: "#ecf6fd"},
          // text: {
          //   primary: 'inherit',
          // }
        }
      : {
          // palette values for dark mode
          primary: {
            main:'#001a28'},
          background: {
            default: '#717171'
          }
        }),
  },
});

export default getDesignTokens