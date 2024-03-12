import { Box, Typography } from '@mui/material';
import { cardData } from '@/lib/recoil/homeDataAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import OfficeCard from '../common/OfficeCard';
import { useNavigate } from 'react-router-dom';

const PastReservation = () => {
  const [card, setCard] = useRecoilState(cardData);
  const navigator = useNavigate();
  //   const list = useRecoilValue(cardData);
  //   const findData = list?.find((card: any) => card?.id === id);

  const clickCard = (cardData: any) => {
    navigator(`/reservation/${cardData?.id}`);
  };

  return (
    <Box>
      {card?.map((cardData, idx) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
            <OfficeCard
              key={cardData?.id}
              cardData={cardData}
              clickCard={clickCard}
            />
            <Box sx={{}}>
              <Typography>결제일: 2024.02.01</Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
export default PastReservation;
