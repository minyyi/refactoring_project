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

  const handleColorMode = () => {
    //동기적 업데이트
    let mode;
    setMode((prevMode: PaletteMode) => {
      mode = prevMode;
      return prevMode === 'light' ? 'dark' : 'light';
    });
    localStorage.setItem('mode', mode === 'light' ? 'dark' : 'light');
  };

  return (
    <ColorModeContext.Provider value={{ mode, handleColorMode, setMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}
export default ColorModeContextProvider;
