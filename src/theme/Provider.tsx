import { useState, useMemo, ReactNode, createContext, useContext } from "react";

const ColorModeContext = createContext<{
  mode: string;
  handleColorMode: any;
}>({ mode: "light", handleColorMode: () => {} });

export const useColorModeContext = () => {
  const context = useContext(ColorModeContext);

  return context;
};

function ColorModeContextProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const handleColorMode = useMemo(
    () => () =>
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
    []
  );

  return (
    <ColorModeContext.Provider value={{ mode, handleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}
export default ColorModeContextProvider;
