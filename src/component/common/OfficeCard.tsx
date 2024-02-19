import { Container, Box, Typography } from '@mui/material';

const OfficeCard = ({ sx, ...others }: any) => {
  const list = Array.from({ length: 1 }, (_, i) => {
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
          rowGap: { sm: 0, xs: 1 },
          flexWrap: 'wrap',
          justifyContent: { sm: 'flex-start', xs: 'center' },
          ...sx,
        }}
        {...others}
      >
        {list?.map((card) => {
          return (
            <Box
              key={card?.id}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                rowGap: 1,

                width: { lg: 270, md: 260, sm: 260, xs: '100%' },
                height: 250,
                cursor: 'pointer',
                // backgroundColor: 'gray',
              }}
            >
              <Box sx={{ height: 160, overflow: 'hidden' }}>
                <img
                  src={card?.image}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    borderRadius: 5,
                  }}
                />
              </Box>

              <Box sx={{}}>
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
