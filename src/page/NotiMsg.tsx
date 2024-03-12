import PageContainer from '@/component/common/PageContainer';
import CommonTitle from '@/component/common/CommonTitle';
import { Box, Container, Pagination, Paper } from '@mui/material';
import Noti from '@/component/noti/Noti';

const NotiMsg = () => {
  return (
    <>
      <PageContainer
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // pb: 2,
        }}
      >
        <Container>
          <CommonTitle>알림메시지</CommonTitle>
          <Paper elevation={3} square={false} sx={{ padding: 3 }}>
            {Array.from({ length: 5 }, (noti, idx) => {
              return <Noti />;
            })}
          </Paper>
        </Container>
        <Pagination sx={{ mt: 3 }} />
      </PageContainer>
    </>
  );
};
export default NotiMsg;
