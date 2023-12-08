import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "@mui/icons-material";
import Web from "../appbar/Web";
import Profile from "../appbar/Profile";

const pages = ["type", "name", "point"];
const settings = ["Profile", "Bookmark", "Reservation", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
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
              <Web />
            </>
          )}
          {/* 반응형 */}
          {matches && (
            <>
              <Box sx={{ display: "flex" }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                {/* 메뉴버튼 */}
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: "block",
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Search sx={{ display: "flex", mr: 0.5, mt: 0.5 }} />
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: "flex",
                    fontWeight: 700,
                    letterSpacing: 2,
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  OfficeFinder
                </Typography>
              </Box>
            </>
          )}
          <Profile />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
