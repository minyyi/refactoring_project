import PageContainer from '@/component/common/PageContainer';
import { Container, Box, Typography } from '@mui/material';
import CommonTitle from '@/component/common/CommonTitle';
import MyProfile from '@/component/mypage/MyProfile';

const Mypage = () => {
  return (
    <>
      <PageContainer>
        <Container>
          <CommonTitle>마이페이지</CommonTitle>
          <Box sx={{ display: 'flex' }}>
            <MyProfile />
          </Box>
        </Container>
        <Container>
          <Box>
            <Typography>충전내역 </Typography>
            <Box> 데이터데이터</Box>
          </Box>
        </Container>
      </PageContainer>
    </>
  );
};
export default Mypage;
