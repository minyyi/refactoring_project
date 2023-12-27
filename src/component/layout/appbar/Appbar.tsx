import { useTheme } from "@mui/material/styles";
import { AppBar, Toolbar, Container, useMediaQuery } from "@mui/material";
import WebAppbar from "./web/WebAppbar";
import Profile from "./web/Profile";
import MobileAppbar from "./mobile/MobileAppbar";
import DarkmodeButton from "./common/DarkmodeButton";

function ResponsiveAppBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  console.log(matches);

  return (
    <AppBar position="static" sx={{backgroundColor: 'primary.main'}}>
      <Container>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: {
              md: "",
              xs: "space-between",
            },
          }}
        >
          {/* 900이상 */}
          {!matches && (
            <>
              <WebAppbar />
              <DarkmodeButton />
              <Profile />
            </>
          )}
          {/* 반응형 */}
          {matches && (
            <>
              <MobileAppbar />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
