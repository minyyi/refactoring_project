import { Box, Container, Typography } from '@mui/material';
import PageContainer from '@/component/common/PageContainer';
import CommonButton from '@/component/common/Button';
const MainPage = () => {
  return (
    <>
      <PageContainer>
        <Container>
          <Box
            sx={{
              minWidth: '100%',
              border: 3,
            }}
          >
            첫페이지에서 보이는 내용
            <Box>박스글자는?</Box>
            <Typography>타이포그래피</Typography>
            <CommonButton variant={'outlined'} sx={{ color: 'inherit' }}>
              원래 글자
            </CommonButton>
            <CommonButton variant={'contained'}>버튼커스텀</CommonButton>
          </Box>
        </Container>
      </PageContainer>
    </>
  );
};

export default MainPage;
