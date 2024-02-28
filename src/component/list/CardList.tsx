import { Container, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import OfficeCard from '../common/OfficeCard';

const CardList = ({ sx, ...others }: any) => {
  //   const navigate = useNavigate();

  //   const clickCard = () => {
  //     navigate('/reservation');
  //   };

  const list = Array.from({ length: 10 }, (_, i) => {
    return {
      id: i,
      image: '/img1.avif',
      officeName: '선릉 더 공간A',
      grade: '⭐️4.91(21)',
      address: '서울시 강남구 테헤란로70번길 14-10',
      price: '월 500,000',
    };
  });
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
        {list?.map((list, idx) => {
          return <OfficeCard key={idx} list={list} />;
        })}
        {/* {list?.map(list, idx) => {
          return <OfficeCard key={idx} list={list} />;
        }} */}
      </Container>
    </>
  );
};

export default CardList;
