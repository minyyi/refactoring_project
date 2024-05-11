import { Box, Typography, Button } from '@mui/material';
// import MenuIcon from "@mui/icons-material/Menu";
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { userType } from '@/lib/recoil/authAtom';
import { useRecoilValue } from 'recoil';
import { userid } from '@/lib/recoil/authAtom';

const WebAppbar = () => {
  const getUserInfo = useRecoilValue<any>(userid);
  console.log(getUserInfo);

  const role = localStorage.getItem('role');
  const pages = [role, getUserInfo?.name, 'point'];
  const navigate = useNavigate();
  const clickLogo = () => {
    navigate('/home');
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
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
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
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {pages.map((page) => (
          <Button
            key={page}
            sx={{
              my: 2,
              color: 'inherit',
              display: 'flex',
            }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default WebAppbar;
