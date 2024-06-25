import PageContainer from '@/component/common/PageContainer';
import { Container, Box, Typography } from '@mui/material';
import CommonTitle from '@/component/common/CommonTitle';
import OfficeCard from '@/component/common/OfficeCard';
import { useRecoilValue } from 'recoil';
import { cardData } from '@/lib/recoil/homeDataAtom';
import { userid } from '@/lib/recoil/authAtom';

const Bookmark = () => {
  const cardInfo = useRecoilValue<any>(cardData);
  const userInfo = useRecoilValue<any>(userid);
  const onHeart = cardInfo?.filter(
    (card: any) => userInfo?.bookmarks?.some((id: any) => id === card?._id)
  );
  console.log(cardInfo);
  console.log(userInfo);
  console.log(userInfo?.bookmarks);
  console.log(onHeart);
  return (
    <PageContainer
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}>
        <CommonTitle>즐겨찾기</CommonTitle>
        {onHeart.length === 0 ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 2,
            }}
          >
            <Typography>즐겨찾기에 추가된 오피스가 없습니다.</Typography>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', columnGap: 2, px: 4, flexWrap: 'wrap' }}>
            {onHeart.map((cardData: any) => {
              return (
                <OfficeCard
                  key={cardData?._id}
                  cardData={cardData}
                  onHeart={onHeart}
                />
              );
            })}
          </Box>
        )}
      </Container>
    </PageContainer>
  );
};
export default Bookmark;
