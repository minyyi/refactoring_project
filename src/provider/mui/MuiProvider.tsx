import {theme} from "@/provider/mui/theme"
import { ThemeProvider , CssBaseline} from "@mui/material"
import { ReactNode } from "react";



const MuiProvider = ({ children }:{children:ReactNode}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    
    )
}
export default MuiProvider