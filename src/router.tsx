import { Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import { Layout } from "./component/layout/Layout";
// import { ThemeProvider } from "./theme/Context";
// import { createTheme } from "@mui/material";

const Router = () => {
  // const [mode, setMode] = useState<PaletteMode>("light");
  // const colorMode = useMemo(
  //   () => ({
  //     // The dark mode switch would invoke this method
  //     toggleColorMode: () => {
  //       setMode((prevMode: PaletteMode) =>
  //         prevMode === "light" ? "dark" : "light"
  //       );
  //     },
  //   }),
  //   []
  // );
  // const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Layout>
      {/* </ThemeProvider> */}
    </>
  );
};
export default Router;
