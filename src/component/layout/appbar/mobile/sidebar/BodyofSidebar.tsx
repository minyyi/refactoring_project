import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

interface Toggle {
  MobileMenuItemArray: any;
  toggleDrawer: (event: any, path?: string) => void;
}

const SidebarMenu = (props: Toggle) => {
  return (
    <Box
      sx={{ pl: 1, flexGrow: 1 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer} //예외
    >
      <List>
        {props?.MobileMenuItemArray?.map((menu: any, idx: any) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton
              onClick={(event) => {
                props?.toggleDrawer(event, menu?.path);
              }}
              // onKeyDown={toggleDrawer} //예외
            >
              <ListItemText primary={menu?.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SidebarMenu;
