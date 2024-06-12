import { Box, Typography } from '@mui/material';
import { cardData } from '@/lib/recoil/homeDataAtom';
import { useRecoilValue } from 'recoil';
import OfficeCard from '../common/OfficeCard';

const DataofReservation = ({ clickCard }: any) => {
  const card = useRecoilValue(cardData);
  //   const navigator = useNavigate();
  //   const list = useRecoilValue(cardData);
  //   const findData = list?.find((card: any) => card?.id === id);

  //   const clickCard = (cardData: any) => {
  //     navigator(`/reservation/${cardData?.id}`);
  //   };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}>
      {card?.map((cardData: any, idx: any) => {
        return (
          <Box sx={{ display: 'flex', columnGap: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <OfficeCard
                key={cardData?._id}
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
                {/* 사용기간 마지막 날 이후에 나타나도록  */}
                {/* <CommonButton>리뷰작성하기</CommonButton> */}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
export default DataofReservation;
