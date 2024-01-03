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
          minHeight: '100vh',
          minWidth: '1200',
        }}
      >
        <img src="../../public/img1.avif" />
        <Box sx={{ position: 'absolute', bottom: 20, left: '50%' }}>
          <Typography>
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
