import { Box, Typography } from '@mui/material';
import { useRecoilState } from 'recoil';
import BookmarkButton from './BookmarkButton';
import { favorite } from '@/lib/recoil/favoritAtom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// interface CardData {
//   address: any;
//   _id: string;
//   id?: string;
//   officeName: string;
//   image: string;
//   grade: number;
//   price: number;
// }

// interface OfficeCardProps {
//   clickCard?: (cardData: CardData) => void;
//   cardData: CardData;
//   sx?: React.CSSProperties;
//   onHeart: any;
// }

const OfficeCard = ({ clickCard = () => {}, cardData, sx, onHeart }: any) => {
  const id = cardData?._id;
  console.log(id);
  const [heart, setHeart] = useRecoilState<any>(favorite);
  const clickHeart = (cardData: any) => {
    console.log(cardData);
    setHeart((prev: any) => {
      //map??
      let checkTrue = prev?.find((heart: any) => id === heart?._id);
      console.log(checkTrue);
      if (checkTrue) {
        return prev?.filter((heart: any) => id !== heart?._id);
      } else {
        return [cardData, ...prev];
      }
    });
  };
  console.log(heart);
  console.log(cardData?.image);
  console.log(id);
  return (
    <>
      <Box
        key={id}
        onClick={() => clickCard(cardData)}
        sx={{
          ...sx,
          display: 'flex',
          // justifyContent: 'center',
          flexDirection: 'column',
          rowGap: 1,

          width: { lg: 260, md: 270, sm: 260, xs: '100%' },
          height: 'auto',
          cursor: 'pointer',
        }}
      >
        <Box sx={{ height: 160, overflow: 'hidden', position: 'relative' }}>
          <LazyLoadImage
            src={cardData?.image}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: 5,
            }}
          />
          <BookmarkButton
            clickHeart={clickHeart}
            cardData={cardData}
            onHeart={onHeart}
          />
        </Box>

        <Box sx={{}}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>{cardData?.officeName}</Typography>
            <Typography>⭐️{cardData?.grade}</Typography>
          </Box>
          <Typography>
            {`${cardData?.address?.legion} `}
            {`${cardData?.address?.city} `}
            {cardData?.address?.town}
          </Typography>
          {id ? <Typography>월 {cardData?.price}원</Typography> : null}
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
