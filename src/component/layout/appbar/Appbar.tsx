import { useTheme } from "@mui/material/styles";
import { AppBar, Toolbar, Container, useMediaQuery } from "@mui/material";
import WebAppbar from "./Web";
import Profile from "./Profile";
import MobileAppbar from "./Mobile";

function ResponsiveAppBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  console.log(matches);

  return (
    <AppBar position="static">
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
