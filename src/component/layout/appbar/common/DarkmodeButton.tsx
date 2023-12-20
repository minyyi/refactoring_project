import { IconButton } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useColorModeContext } from "@/theme/Provider";

const DarkmodeButton = () => {
  const context = useColorModeContext();
  console.log("darkbutton", context);
  return (
    <>
      <IconButton
        sx={{ ml: 1, display: "flex" }}
        onClick={context.handleColorMode}
        color="inherit"
      >
        {context.mode === "dark" ? <Brightness7Icon /> : <DarkModeIcon />}
        {/* {theme.palette.mode === "dark" ? <Brightness7Icon /> : <DarkModeIcon />} */}
      </IconButton>
    </>
  );
};
export default DarkmodeButton;
