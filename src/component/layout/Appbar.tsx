import { useTheme } from "@mui/material/styles";
import { AppBar, Toolbar, Container, useMediaQuery } from "@mui/material";
import WebAppbar from "../appbar/Web";
import Profile from "../appbar/Profile";
import MobileAppbar from "../appbar/Mobile";

// const pages = ["type", "name", "point"];
// const settings = ["Profile", "Bookmark", "Reservation", "Logout"];

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
            </>
          )}
          {/* 반응형 */}
          {matches && (
            <>
              <MobileAppbar />
            </>
          )}
          <Profile />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
