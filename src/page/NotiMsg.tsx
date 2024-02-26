import PageContainer from '@/component/common/PageContainer';
import Title from '@/component/common/Title';
import { Box, Container, Pagination, Paper } from '@mui/material';
import Noti from '@/component/noti/Noti';

const NotiMsg = () => {
  return (
    <>
      <PageContainer>
        <Container>
          <Title>알림메시지</Title>
          <Paper elevation={3} square={false} sx={{ padding: 2 }}>
            {Array.from({ length: 5 }, (noti, idx) => {
              return <Noti />;
            })}
            <Pagination sx={{ margin: 'auto' }} />
          </Paper>
        </Container>
      </PageContainer>
    </>
  );
};
export default NotiMsg;
