import { Search } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { createContext, useContext } from 'react';

import * as React from 'react';
import { IconButton, Drawer, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import SidebarHeader from '@/component/layout/appbar/mobile/sidebar/HeaderofSidebar';
import SidebarMenu from '@/component/layout/appbar/mobile/sidebar/BodyofSidebar';
import SidebarFooter from './sidebar/FooterofSidebar';
import { MobileMenuItemArray } from '@/utils/config';
import DarkmodeButton from '../common/DarkmodeButton';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const MobileAppbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();

  const clickLogo = () => {
    navigate('/home');
  };

  const [state, setState] = React.useState(false);

  const toggleDrawer = (
    event: React.KeyboardEvent | React.MouseEvent,
    path?: string
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    if (path) {
      navigate(path);
    }

    setState((prev) => !prev);
    console.log('toggleDrawer', path);
  };

  return (
    <>
      <Box
        onClick={clickLogo}
        sx={{
          display: 'flex',
        }}
      >
        <Search sx={{ display: 'flex', mr: 0.5, mt: 0.5 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#"
          sx={{
            mr: 2,
            display: 'flex',
            fontWeight: 700,
            letterSpacing: 2,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          OfficeFinder
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <DarkmodeButton />
        <IconButton
          onClick={(event) => toggleDrawer(event)}
          size="large"
          aria-label="sidebar menu"
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: { sm: 240, xs: '100%' },
            },
            // width: 250,
          }}
          anchor={'right'}
          open={state}
          onClose={() => {
            setState(false);
          }}
        >
          <SidebarHeader toggleDrawer={toggleDrawer} />
          <SidebarMenu
            MobileMenuItemArray={MobileMenuItemArray}
            toggleDrawer={toggleDrawer}
          />
          <SidebarFooter />
        </Drawer>
      </Box>
    </>
  );
};

export default MobileAppbar;
