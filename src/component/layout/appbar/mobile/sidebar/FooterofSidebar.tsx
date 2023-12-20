import { Box, Typography, Divider, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
const SidebarFooter = () => {
  return (
    <>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          my: 2,
        }}
      >
        <Typography>
          Logout
          <IconButton>
            <LogoutIcon />
          </IconButton>
        </Typography>
      </Box>
    </>
  );
};

export default SidebarFooter;
