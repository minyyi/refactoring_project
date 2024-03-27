import CommonTitle from '@/component/common/CommonTitle';
import PageContainer from '@/component/common/PageContainer';
import { cardData } from '@/lib/recoil/homeDataAtom';
import { Container, Box, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';

const OfficeDatail = ({ clickCard }: any) => {
  const { id } = useParams();
  const office = useRecoilValue<any>(cardData);
  const findData = office?.find((card: any) => card?.id === id);
  return (
    <PageContainer>
      <Container>
        <CommonTitle>예약현황</CommonTitle>
        <Box>
          <Typography>{findData?.officeName}</Typography>
          <Typography>{findData?.address?.city}</Typography>
        </Box>
      </Container>
    </PageContainer>
  );
};
export default OfficeDatail;
