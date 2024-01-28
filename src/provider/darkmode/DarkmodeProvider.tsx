import { useState, useMemo, ReactNode, createContext, useContext } from 'react';
import { PaletteMode } from '@mui/material';

const ColorModeContext = createContext<{
  mode: PaletteMode;
  handleColorMode: any;
}>({ mode: 'light', handleColorMode: () => {} });

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

  //   const handleColorMode = useMemo(
  //     () => () =>
  //       { return (
  //       setMode((prevMode: PaletteMode) =>
  //         prevMode === 'light' ? 'dark' : 'light'
  //       ),
  //       )}
  // ,[]
  //   );
  //useEffect

  return (
    <ColorModeContext.Provider value={{ mode, handleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}
export default ColorModeContextProvider;
