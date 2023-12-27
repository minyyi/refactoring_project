import { useState, useMemo, ReactNode, createContext, useContext } from "react";
import { PaletteMode } from "@mui/material";
const ColorModeContext = createContext<{
  mode: PaletteMode;
  handleColorMode: any;
}>({ mode: "light", handleColorMode: () => {} });

export const useColorModeContext = () => {
  const context = useContext(ColorModeContext);

  return context;
};

function ColorModeContextProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>("light");
  const handleColorMode = useMemo(
    () => () =>
      setMode((prevMode:PaletteMode) => (prevMode === "light" ? "dark" : "light")),
    []
  );

  return (
    <ColorModeContext.Provider value={{ mode, handleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}
export default ColorModeContextProvider;
