import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

interface Toggle {
  toggleDrawer: any;
  array: any;
}

const SideBarMenu = (props: Toggle) => {
  return (
    <Box
      sx={{ pl: 2 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer} //예외
    >
      <List>
        {props.array.map((menu: any, idx: any) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton
              onClick={(event) => {
                props.toggleDrawer(event, menu?.path);
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
              props?.toggleDrawer(event);
            }}
          >
            <ListItemText>Logout</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBarMenu;
