import { useState, useMemo, ReactNode, createContext, useContext } from 'react';
import { PaletteMode } from '@mui/material';

const ColorModeContext = createContext<{
  mode: PaletteMode;
  handleColorMode: any;
  setMode: any;
}>({ mode: 'light', handleColorMode: () => {}, setMode: () => {} });

export const useColorModeContext = () => {
  const context = useContext(ColorModeContext);

  return context;
};

function ColorModeContextProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>('light');

  const handleColorMode = () => {
    setMode((prevMode: PaletteMode) => {
      localStorage.setItem('mode', prevMode === 'light' ? 'dark' : 'light');
      //useEffect
      return prevMode === 'light' ? 'dark' : 'light';
    });
  };

  return (
    <ColorModeContext.Provider value={{ mode, handleColorMode, setMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}
export default ColorModeContextProvider;
