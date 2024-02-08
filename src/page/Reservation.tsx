import PageContainer from '@/component/common/PageContainer';
import Title from '@/component/common/Title';
import { Box } from '@mui/material';

const Reservation = () => {
  return (
    <PageContainer>
      <Title>예약하기</Title>
      <Box sx={{ display: 'flex' }}>
        <Box>사진</Box>
        <Box>달력</Box>
        <Box>날짜</Box>
      </Box>
    </PageContainer>
  );
};
export default Reservation;
