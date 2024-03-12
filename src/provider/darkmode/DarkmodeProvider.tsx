import { useState, useMemo, ReactNode, createContext, useContext } from 'react';
import { PaletteMode } from '@mui/material';
import { userid } from '@/lib/recoil/authAtom';

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
  const id = localStorage.getItem('userid');

  const handleColorMode = () => {
    if (!id) {
      setMode((prevMode: PaletteMode) => {
        localStorage.setItem('mode', prevMode === 'dark' ? 'light' : 'light');
        return prevMode === 'dark' ? 'light' : 'light';
      });
    } else {
      setMode((prevMode: PaletteMode) => {
        localStorage.setItem('mode', prevMode === 'light' ? 'dark' : 'light');
        return prevMode === 'light' ? 'dark' : 'light';
      });
    }
  };

  return (
    <ColorModeContext.Provider value={{ mode, handleColorMode, setMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}
export default ColorModeContextProvider;
