import { Container, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import OfficeCard from '../common/OfficeCard';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cardData } from '@/lib/recoil/homeDataAtom';
import { mySelector } from '@/lib/recoil/searchAtom';

const CardList = ({ sx, ...others }: any) => {
  // const card = useRecoilValue(cardData);
  const navigator = useNavigate();
  const searchFilter = useRecoilValue(mySelector);

  const clickCard = (cardData: any) => {
    navigator(`/reservation/${cardData?.id}`);
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
        {searchFilter?.map((cardData: any, id: any) => {
          return (
            <OfficeCard key={id} clickCard={clickCard} cardData={cardData} />
          );
        })}
      </Container>
    </>
  );
};

export default CardList;
