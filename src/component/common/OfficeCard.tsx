import { Container, Box, Typography } from '@mui/material';

const OfficeCard = () => {
  return (
    <>
      <Container>
        <Box sx={{ width: 300, backgroundColor: 'gray' }}>
          박스
          <img src="/public/img1.avif" style={{ width: 250, height: 230 }} />
          <Typography>오피스네임</Typography>
          <Typography>주소</Typography>
        </Box>
      </Container>
    </>
  );
};

export default OfficeCard;
