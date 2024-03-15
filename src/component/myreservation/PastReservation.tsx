import { Box, Typography } from '@mui/material';
import { cardData } from '@/lib/recoil/homeDataAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import OfficeCard from '../common/OfficeCard';
import { useNavigate } from 'react-router-dom';
import CommonButton from '../common/CommonButton';
import { grey } from '@mui/material/colors';

const PastReservation = () => {
  const [card, setCard] = useRecoilState(cardData);
  const navigator = useNavigate();
  //   const list = useRecoilValue(cardData);
  //   const findData = list?.find((card: any) => card?.id === id);

  const clickCard = (cardData: any) => {
    navigator(`/reservation/${cardData?.id}`);
  };

  return (
    <>
      {card?.map((cardData, idx) => {
        return (
          <Box sx={{ display: 'flex', columnGap: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <OfficeCard
                key={cardData?.id}
                cardData={cardData}
                clickCard={clickCard}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}>
              <Box sx={{ pt: 2 }}>
                <Typography>사용기간</Typography>
                <Typography>2024.02.01 ~ 2024.03.01</Typography>
              </Box>
              <Box sx={{}}>
                <Typography sx={{ fontSize: 14, color: 'grey' }}>
                  결제일
                </Typography>
                <Typography sx={{ fontSize: 14, color: 'grey' }}>
                  2024.02.01
                </Typography>
              </Box>
              <Box>
                <CommonButton>리뷰작성하기</CommonButton>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};
export default PastReservation;
