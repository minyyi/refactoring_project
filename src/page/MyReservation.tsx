import PageContainer from '@/component/common/PageContainer';
import CommonTitle from '@/component/common/CommonTitle';
import { Container, Typography, Box } from '@mui/material';
import OfficeCard from '@/component/common/OfficeCard';
import { cardData } from '@/lib/recoil/homeDataAtom';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import PastReservation from '@/component/myreservation/PastReservation';

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
      <Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}>
        <CommonTitle>예약 내역</CommonTitle>
        <Box sx={{ padding: 3 }}>
          <Typography>현재 이용중</Typography>
          <Box>
            {card?.map((cardData, idx) => {
              return (
                <Box
                  sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}
                >
                  <OfficeCard
                    key={idx}
                    cardData={cardData}
                    clickCard={clickCard}
                  />
                  <Box sx={{}}>
                    <Typography>결제일: 2024.03.01</Typography>
                    <Typography>다음 결제일은 4월 1일 입니다.</Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box sx={{ padding: 3 }}>
          <Typography>지난예약내역</Typography>
          <PastReservation />
        </Box>
      </Container>
    </PageContainer>
  );
};
export default MyReservation;
