import React from 'react';
import {
  Box,
  IconButton,
  Typography,
  Menu,
  Avatar,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { userid } from '@/lib/recoil/authAtom';
import { customerMenuItemArray, agentMenuItemArray } from '@/utils/config';
import { useColorModeContext } from '@/provider/darkmode/DarkmodeProvider';
import ColorModeContextProvider from '@/provider/darkmode/DarkmodeProvider';
import { useRecoilState } from 'recoil';
import { userType } from '@/lib/recoil/authAtom';

// const settings = [
//   { title: 'Profile', path: '/home', type: 'profile' },
//   { title: 'Bookmark', path: '/home' },
//   { title: 'Reservation', path: '/home' },
// ];

const Profile = () => {
  const navigator = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const context = useColorModeContext();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (matches) {
      //렌더링이 안됨!
      return;
    } else {
      setAnchorElUser(event.currentTarget);
    }
  };
  const [process, setProcess] = useRecoilState(userType);

  const handleCloseUserMenu = (setting: any) => {
    setAnchorElUser(null);
    // console.log(setting);
    if (setting?.type === 'logout') {
      localStorage.removeItem('userid');
      localStorage.setItem('mode', 'light');
      localStorage.removeItem('role');
      localStorage.removeItem('token');
      context?.setMode('light');
    }
    //'mode', prevMode === 'light' ? 'dark' : 'light'
    navigator(setting?.path);
  };
  const role = localStorage.getItem('role');

  return (
    <>
      <Box>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
          <Avatar
            sx={{ color: 'inherit' }}
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
          />
        </IconButton>
        {!matches ? (
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {role === 'agency'
              ? agentMenuItemArray.map((menu) => (
                  <MenuItem
                    key={menu?.title}
                    onClick={() => handleCloseUserMenu(menu)}
                  >
                    <Typography textAlign="center">{menu?.title}</Typography>
                  </MenuItem>
                ))
              : customerMenuItemArray.map((menu) => (
                  <MenuItem
                    key={menu?.title}
                    onClick={() => handleCloseUserMenu(menu)}
                  >
                    <Typography textAlign="center">{menu?.title}</Typography>
                  </MenuItem>
                ))}
          </Menu>
        ) : (
          ''
        )}
      </Box>
    </>
  );
};

export default Profile;
