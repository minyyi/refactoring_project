import { Container, Box, Typography } from '@mui/material';

const OfficeCard = () => {
  const list = Array.from({ length: 26 }, (_, i) => {
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
          gap: 1,
          flexWrap: 'wrap',
          // justifyContent: 'center',
        }}
      >
        {list?.map((card) => {
          return (
            <Box
              key={card?.id}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                width: 280,
                cursor: 'pointer',
                // backgroundColor: 'gray',
              }}
            >
              <img
                src={card?.image}
                // src="/img1.avif"
                style={{
                  width: 250,
                  height: 230,
                  borderRadius: 5,
                  margin: 8,
                }}
              />
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>{card?.officeName}</Typography>
                  <Typography>{card?.grade}</Typography>
                </Box>
                <Typography>{card?.address}</Typography>
                <Typography>{card?.price}</Typography>
              </Box>
            </Box>
          );
        })}
      </Container>
    </>
  );
};

export default OfficeCard;
