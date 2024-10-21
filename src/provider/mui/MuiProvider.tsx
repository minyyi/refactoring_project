import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import { ReactNode, useMemo } from 'react';
import getDesignTokens from '@/provider/mui/theme';
import { useColorModeContext } from '../darkmode/DarkmodeProvider';

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
});

const MuiProvider = ({ children }: { children: ReactNode }) => {
  const modeContext = useColorModeContext();
  const theme = useMemo(
    () => createTheme(getDesignTokens(modeContext?.mode)),
    [modeContext?.mode]
  );

  return (
    <StylesProvider generateClassName={generateClassName} injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
};
export default MuiProvider;
