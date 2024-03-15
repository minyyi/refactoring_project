import PageContainer from '@/component/common/PageContainer';
import { Container, Box } from '@mui/material';
import CommonTitle from '@/component/common/CommonTitle';
import OfficeCard from '@/component/common/OfficeCard';
import { cardData } from '@/lib/recoil/homeDataAtom';
import { useRecoilState } from 'recoil';

const Bookmark = () => {
  const [card, setCard] = useRecoilState(cardData);

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
        <Box sx={{ display: 'flex', columnGap: 2, px: 4, flexWrap: 'wrap' }}>
          {card.map((cardData, idx) => {
            return <OfficeCard key={cardData?.id} cardData={cardData} />;
          })}
        </Box>
      </Container>
    </PageContainer>
  );
};
export default Bookmark;
