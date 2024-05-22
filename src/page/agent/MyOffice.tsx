import { useEffect } from 'react';
import CommonTitle from '@/component/common/CommonTitle';
import OfficeCard from '@/component/common/OfficeCard';
import PageContainer from '@/component/common/PageContainer';
import { Container, Box } from '@mui/material';
import { cardData } from '@/lib/recoil/homeDataAtom';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { auth } from '@/lib/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import CommonButton from '@/component/common/CommonButton';
import { myOfficeData } from '@/lib/recoil/myOfficeAtom';

const MyOffice = () => {
  const navigator = useNavigate();
  const card = useRecoilValue(cardData);
  const userId = localStorage.getItem('userid');
  const filteredData = card?.filter((data: any) => data?.userId === userId);
  const clickOffice = (cardData: any) => {
    navigator(`/officeDatail/${cardData?.id}`);
  };
  const clickAddOffice = () => {
    navigator('/addOffice');
  };

  console.log(card);
  console.log(filteredData);
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
          {filteredData?.map((cardData: any, id: any) => {
            return (
              <OfficeCard
                key={id}
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
