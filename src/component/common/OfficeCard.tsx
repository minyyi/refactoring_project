import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import BookmarkButton from './BookmarkButton';
import { favorite } from '@/lib/recoil/favoritAtom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const optimizeImageUrl = (url: string, width = 300) => {
  return `${url}?width=${width}`;
};

const OfficeCard = ({ clickCard = () => {}, cardData, sx, onHeart }: any) => {
  const id = cardData?._id;
  console.log(id);
  const [heart, setHeart] = useRecoilState<any>(favorite);
  // const blurredPlaceholder = `${cardData.image}?w=20&blur=50`;
  const dynamicPlaceholder = `https://via.placeholder.com/300x200/CCCCCC/969696?text=${encodeURIComponent(cardData.officeName)}`;
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
  useEffect(() => {
    const img = new Image();
    img.src = optimizeImageUrl(cardData.image);
  }, [cardData.image]);

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
          {/* <LazyLoadImage
            src={optimizeImageUrl(cardData?.image)}
            alt={cardData.officeName}
            effect="blur"
            // placeholderSrc="/path/to/placeholder-image.jpg"
            placeholderSrc={dynamicPlaceholder}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: 5,
            }}
          /> */}
          <img
            src={optimizeImageUrl(cardData?.image)}
            alt="중요 이미지"
            // fetchpriority="high" // 브라우저에게 높은 우선순위로 로드하도록 지시
            loading="eager" // 즉시 로딩 (lazy loading 비활성화)
            decoding="sync" // 동기적 디코딩
            // onLoad={() => {}} // 로딩 완료 추적
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

export default React.memo(OfficeCard);
