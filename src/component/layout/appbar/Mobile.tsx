import { Search } from "@mui/icons-material";
import * as React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Drawer,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const MobileAppbar = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (
    event: React.KeyboardEvent | React.MouseEvent,
    path?: string
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    if (path) {
      navigate(path);
    }

    setState((prev) => !prev);
    console.log("toggleDrawer", path);
  };

  const array = [
    { title: "Profile", path: "/profile" },
    { title: "Bookmark", path: "/bookmark" },
    { title: "Reservation", path: "/reservation" },
  ];

  const list = () => (
    <Box
      sx={{ pl: 2 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer} //예외
    >
      <List>
        {array.map((menu, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton
              onClick={(event) => {
                toggleDrawer(event, menu?.path);
              }}
              // onKeyDown={toggleDrawer} //예외
            >
              <ListItemText primary={menu?.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={(event) => {
              toggleDrawer(event);
            }}
          >
            <ListItemText>Logout</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

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
      <IconButton
        onClick={(event) => toggleDrawer(event)}
        size="large"
        aria-label="sidebar menu"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={state}
        onClose={() => {
          setState(false);
        }}
      >
        {list()}
      </Drawer>

      {/* <Box sx={{ display: "flex" }}> */}
      {/* <Sidebar /> */}
      {/* </Box> */}
    </>
  );
};

export default MobileAppbar;
