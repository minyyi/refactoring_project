import { Box, Divider, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Profile from "../../web/Profile";

const SidebarHeader = ({
  toggleDrawer,
}: {
  toggleDrawer: (event: any, path?: string) => void;
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 1,
          minWidth: 10,
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Profile />
          <Typography noWrap>이름이름이름이름이름이름dl</Typography>
        </Box>
        <IconButton
          onClick={(event) => toggleDrawer(event)}
          sx={{
            width: "fit-content",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
    </>
  );
};

export default SidebarHeader;
