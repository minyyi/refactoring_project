import PageContainer from '@/component/common/PageContainer';
import { Container, Box, Typography } from '@mui/material';
import Title from '@/component/common/Title';
import MyInfo from '@/component/mypage/MyInfo';
import MyProfile from '@/component/mypage/MyProfile';

const Mypage = () => {
  return (
    <>
      <PageContainer>
        <Container>
          <Title>마이페이지</Title>
          <Box sx={{ display: 'flex' }}>
            <MyProfile />
          </Box>
        </Container>
        <Container>
          <Box>
            <Typography>충전내역 </Typography>
          </Box>
        </Container>
      </PageContainer>
    </>
  );
};
export default Mypage;
