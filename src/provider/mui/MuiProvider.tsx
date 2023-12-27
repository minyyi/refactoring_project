import { ThemeProvider , CssBaseline, createTheme} from "@mui/material"
import { ReactNode, useMemo } from "react";
import getDesignTokens from "@/provider/mui/theme";
import { useColorModeContext } from "../darkmode/DarkmodeProvider";

const MuiProvider = ({ children }:{children:ReactNode}) => {
    const modeContext = useColorModeContext()
    // const theme =  getDesignTokens(modeContext?.mode)
    const theme = useMemo(() => createTheme(getDesignTokens(modeContext?.mode)), [modeContext?.mode]);
    console.log(theme)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    
    )
}
export default MuiProvider