import React from "react";
import { Box, Typography, Button } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "@mui/icons-material";

const pages = ["type", "name", "point"];
// const settings = ["Profile", "Bookmark", "Reservation", "Logout"];

const WebAppbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
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
            fontWeight: 700,
            letterSpacing: 2,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          OfficeFinder
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              color: "inherit",
              display: "flex",
            }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default WebAppbar;
