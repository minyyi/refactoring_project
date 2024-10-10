import { Box, Typography } from '@mui/material';

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <img src="/__Iphone-spinner-1.gif" />
      <Typography sx={{ fontSize: 50 }}>로딩중</Typography>
    </Box>
  );
};
export default Loading;
