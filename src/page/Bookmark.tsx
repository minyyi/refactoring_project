import { useParams } from 'react-router-dom';
import PageContainer from '@/component/common/PageContainer';
import { Container, Box, Typography } from '@mui/material';
import CommonTitle from '@/component/common/CommonTitle';
import OfficeCard from '@/component/common/OfficeCard';
import { useRecoilValue } from 'recoil';
import { favorite } from '@/lib/recoil/favoritAtom';

const Bookmark = ({ selected }: any) => {
  const { id } = useParams();
  const bookmark = useRecoilValue(favorite);
  const findData = selected?.find((card: any) => card?.id === id);
  // console.log(findData);
  // console.log(bookmark);

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
        {bookmark.length === 0 ? (
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
          <Box
            key={findData}
            sx={{ display: 'flex', columnGap: 2, px: 4, flexWrap: 'wrap' }}
          >
            {bookmark.map((cardData) => {
              return <OfficeCard key={findData?.id} cardData={cardData} />;
            })}
          </Box>
        )}
      </Container>
    </PageContainer>
  );
};
export default Bookmark;
