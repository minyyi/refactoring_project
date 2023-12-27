import * as ReactDOM from "react-dom/client";
import MuiProvider from "./provider/mui/MuiProvider";
import ColorModeContextProvider from "@/provider/darkmode/DarkmodeProvider";
import Router from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ColorModeContextProvider>
    <MuiProvider>
        <Router />
    </MuiProvider>
  </ColorModeContextProvider>
);
