import PageContainer from '@/component/common/PageContainer';
import CommonTitle from '@/component/common/CommonTitle';
import { Container, Typography, Box } from '@mui/material';
import OfficeCard from '@/component/common/OfficeCard';
import { cardData } from '@/lib/recoil/homeDataAtom';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import PastReservation from '@/component/myreservation/PastReservation';
import DataofReservation from '@/component/myreservation/DataofReservation';

const MyReservation = () => {
  const navigator = useNavigate();
  const clickCard = (cardData: any) => {
    navigator(`/reservation/${cardData?.id}`);
    // console.log(cardData);
  };

  const [card, setCard] = useRecoilState(cardData);

  return (
    <PageContainer
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container>
        <CommonTitle>예약 내역</CommonTitle>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: 3,
            rowGap: 2,
          }}
        >
          <Typography>현재 이용중</Typography>
          <DataofReservation clickCard={clickCard} />
        </Box>
        <Box sx={{ padding: 3 }}>
          <Typography>지난예약내역</Typography>
          <DataofReservation clickCard={clickCard} />
        </Box>
      </Container>
    </PageContainer>
  );
};
export default MyReservation;
