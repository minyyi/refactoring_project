import CommonTitle from '@/component/common/CommonTitle';
import PageContainer from '@/component/common/PageContainer';
import { cardData } from '@/lib/recoil/homeDataAtom';
import { Container, Box, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import Option from '@/component/common/Option';
import { useRecoilState } from 'recoil';
import {} from '@/utils/config';
import { checkedOptionAtom } from '@/lib/recoil/searchAtom';

const OfficeDatail = ({ clickCard }: any) => {
  const { id } = useParams();
  const office = useRecoilValue<any>(cardData);
  const findData = office?.find((card: any) => card?.id === id);

  const [option, setOption] = useRecoilState<any>(checkedOptionAtom);
  const handleSetOption = ({ name, value }: any) => {
    setOption((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <PageContainer>
      <Container>
        <CommonTitle>예약현황</CommonTitle>
        <Box>
          {/* <Typography>{findData?.officeName}</Typography>
          <Typography>{findData?.address?.city}</Typography>
        </Box>
        <Box>
          {.map((option: any, idx: any) => (
            <Option
              key={option?.name}
              option={option}
              handleSetOption={handleSetOption}
            />
          ))} */}
        </Box>
      </Container>
    </PageContainer>
  );
};
export default OfficeDatail;
