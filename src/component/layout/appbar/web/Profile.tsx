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

const settings = [
  { title: 'Profile', path: '/home', type: 'profile' },
  { title: 'Bookmark', path: '/home' },
  { title: 'Reservation', path: '/home' },
  { title: 'Logout', path: '/', type: 'logout' },
];

const Profile = () => {
  const navigator = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    if (matches) {
      //렌더링이 안됨!
      return;
    } else {
      setAnchorElUser(event.currentTarget);
    }
  };
  console.log(anchorElUser);

  const handleCloseUserMenu = (setting: any) => {
    setAnchorElUser(null);
    console.log(setting);
    if (setting?.type === 'logout') {
      localStorage.removeItem('userid');
    }
    navigator(setting?.path);
  };

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
            {settings.map((setting) => (
              <MenuItem
                key={setting?.title}
                onClick={() => handleCloseUserMenu(setting)}
              >
                <Typography textAlign="center">{setting?.title}</Typography>
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
