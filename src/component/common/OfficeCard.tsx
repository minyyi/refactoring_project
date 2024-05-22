import { useNavigate } from 'react-router-dom';
import { Box, Typography, styled } from '@mui/material';
import { useRecoilState } from 'recoil';
import BookmarkButton from './BookmarkButton';
import { favorite } from '@/lib/recoil/favoritAtom';
// import { useRecoilState } from 'recoil';
// import { cardList } from '@/lib/recoil/homeDataAtom';

const OfficeCard = ({ clickCard = () => {}, cardData, sx, ...others }: any) => {
  const id = localStorage.getItem('userid');

  const [heart, setHeart] = useRecoilState<any>(favorite);
  const clickHeart = (cardData: any) => {
    // console.log(cardData);
    setHeart((prev: any) => {
      //map??
      let checkTrue = prev?.find((heart: any) => cardData?.id === heart?.id);
      if (checkTrue) {
        return prev?.filter((heart: any) => cardData?.id !== heart?.id);
      } else {
        return [cardData, ...prev];
      }
    });
  };

  console.log(cardData);
  return (
    <>
      <Box
        key={cardData?.id}
        onClick={() => clickCard(cardData)}
        sx={{
          display: 'flex',
          // justifyContent: 'center',
          flexDirection: 'column',
          rowGap: 1,

          width: { lg: 260, md: 270, sm: 260, xs: '100%' },
          height: 'auto',
          cursor: 'pointer',
          // backgroundColor: 'gray',
        }}
      >
        <Box sx={{ minHeight: 160, overflow: 'hidden', position: 'relative' }}>
          <img
            src="/img3.avif"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: 5,
            }}
          />
          <BookmarkButton clickHeart={clickHeart} cardData={cardData} />
        </Box>

        <Box sx={{}}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>{cardData?.officeName}</Typography>
            <Typography>{cardData?.grade}</Typography>
          </Box>
          <Typography>
            {`${cardData?.address?.legion} `}
            {`${cardData?.address?.city} `}
            {cardData?.address?.town}
          </Typography>
          {id ? <Typography>{cardData?.price}</Typography> : null}
        </Box>
      </Box>
    </>
  );
};

export default OfficeCard;

// const BookmakrButton = styled('div')({
//   position: 'absolute',
//   top: '5px',
//   left: '5px',
// });
