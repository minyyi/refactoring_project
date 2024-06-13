// import { agentMenuItemArray, customerMenuItemArray } from '@/utils/config';
import { agentMenuItemArray, customerMenuItemArray } from '@/utils/config';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

interface Toggle {
  customerMenuItemArray: any;
  agentMenuItemArray: any;
  toggleDrawer: (event: any, path?: string) => void;
}

const SidebarMenu = (props: Toggle) => {
  const role = localStorage.getItem('role');

  return (
    <Box
      sx={{ pl: 1, flexGrow: 1 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer} //예외
    >
      <List>
        {/* {props?.customerMenuItemArray?.map((menu: any, idx: any) => ( */}
        {role === 'agency'
          ? agentMenuItemArray.map((menu) => (
              <ListItem
                key={menu?.title}
                // onClick={() => handleCloseUserMenu(menu)}
                disablePadding
              >
                <ListItemButton
                  onClick={(event) => {
                    props?.toggleDrawer(event, menu?.path);
                  }}
                  // onKeyDown={toggleDrawer} //예외
                >
                  {/* textAlign="center" */}
                  <ListItemText>{menu?.title}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))
          : customerMenuItemArray.map((menu) => (
              <ListItem
                key={menu?.title}
                // onClick={() => handleCloseUserMenu(menu)}
                disablePadding
              >
                <ListItemButton
                  onClick={(event) => {
                    props?.toggleDrawer(event, menu?.path);
                  }}
                  // onKeyDown={toggleDrawer} //예외
                >
                  {/* textAlign="center" */}
                  <ListItemText>{menu?.title}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
      </List>
    </Box>
  );
};

export default SidebarMenu;
