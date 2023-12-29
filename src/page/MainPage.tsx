import { Box, Button, Container, Typography } from '@mui/material';
import PageContainer from '@/component/common/PageContainer';

const MainPage = () => {
  return (
    <>
      <PageContainer sx={{ py: 0 }}>
        <Container>
          <Box
            sx={{
              minWidth: '100%',
              border: 3,
            }}
          >
            첫페이지에서 보이는 내용
            <Button sx={{ color: 'inherit' }} variant="contained">
              <Typography>원래 글자</Typography>
            </Button>
            <Box>박스글자는?</Box>
            <Typography>타이포그래피</Typography>
          </Box>
        </Container>
      </PageContainer>
    </>
  );
};

export default MainPage;
