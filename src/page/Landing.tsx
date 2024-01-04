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
          justifyContent: 'center',
          minHeight: '100vh',
          minWidth: '1200',
        }}
      >
        <img src="/img1.avif" />
        <Box
          sx={{
            position: 'absolute',
            bottom: '40%',
            left: '47%',
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
    </>
  );
};
export default LandingPage;
