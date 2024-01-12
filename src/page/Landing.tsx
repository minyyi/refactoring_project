import { Box, IconButton, Typography } from '@mui/material';
import { Login } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
  const navigate = useNavigate();

  const clicktoLogin = () => {
    navigate('/login');
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          // justifyContent: 'center',
          // backgroundColor: 'yellow',
          // minWidth: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            backgroundColor: 'blue',
            position: 'relative',
          }}
        >
          <img src="/img1.avif" style={{ width: '100%', objectFit: 'cover' }} />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'primary.main',
              px: 2,
              py: 1,
              borderRadius: 15,
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
              Login
              <IconButton onClick={clicktoLogin}>
                <Login />
              </IconButton>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default LandingPage;
