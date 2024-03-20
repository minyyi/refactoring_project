import CommonTitle from '@/component/common/CommonTitle';
import OfficeCard from '@/component/common/OfficeCard';
import PageContainer from '@/component/common/PageContainer';
import { Container, Box } from '@mui/material';
import { cardData } from '@/lib/recoil/homeDataAtom';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import CommonButton from '@/component/common/CommonButton';
import { myOfficeData } from '@/lib/recoil/myOfficeAtom';

const MyOffice = () => {
  const card = useRecoilValue(myOfficeData);
  const navigator = useNavigate();
  const clickOffice = (cardData: any) => {
    navigator(`/officeDatail/${cardData?.id}`);
  };
  const clickAddOffice = () => {
    navigator('/addOffice');
  };

  return (
    <PageContainer>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <CommonTitle>내오피스</CommonTitle>
          <Box>
            <CommonButton onClick={clickAddOffice}>
              오피스 추가하기
            </CommonButton>
          </Box>
        </Box>
        <Box
          sx={{ display: 'flex', columnGap: 2, flexWrap: 'wrap', padding: 2 }}
        >
          {card?.map((cardData, idx) => {
            return (
              <OfficeCard
                key={idx}
                cardData={cardData}
                clickCard={clickOffice}
              />
            );
          })}
        </Box>
      </Container>
    </PageContainer>
  );
};
export default MyOffice;
