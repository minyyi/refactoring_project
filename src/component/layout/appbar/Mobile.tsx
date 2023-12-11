import { Box, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import Sidebar from "./Sidebar";

const MobileAppbar = () => {
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
          href="#"
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

      <Box sx={{ display: "flex" }}>
        <Sidebar />
      </Box>
    </>
  );
};

export default MobileAppbar;
