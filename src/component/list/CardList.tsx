import { Container, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import OfficeCard from '../common/OfficeCard';
import { useRecoilState } from 'recoil';
import { cardList } from '@/lib/recoil/homeDataAtom';

const CardList = ({ sx, ...others }: any) => {
  const [card, setCard] = useRecoilState(cardList);
  const navigator = useNavigate();

  const clickCard = (cardData: any) => {
    navigator(`/reservation/${cardData?.id}`);
    // console.log(cardData);
  };
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          columnGap: 2,
          rowGap: 1,
          flexWrap: 'wrap',
          justifyContent: { sm: 'flex-start', xs: 'center' },
          ...sx,
        }}
        {...others}
      >
        {card?.map((cardData, idx) => {
          return (
            <OfficeCard key={idx} cardData={cardData} clickCard={clickCard} />
          );
        })}
      </Container>
    </>
  );
};

export default CardList;
