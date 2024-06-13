import CommonTitle from '@/component/common/CommonTitle';
import PageContainer from '@/component/common/PageContainer';
import { cardData } from '@/lib/recoil/homeDataAtom';
import { Container, Box } from '@mui/material';
import { useRecoilValue } from 'recoil';

const OfficeDatail = () => {
  const card = useRecoilValue(cardData);
  const userId = localStorage.getItem('userid');

  const findData = card?.find((data: any) => data?.userId === userId);

  // const [option, setOption] = useRecoilState<any>(checkedOptionAtom);
  // const handleSetOption = ({ name, value }: any) => {
  //   setOption((prev: any) => {
  //     return { ...prev, [name]: value };
  //   });
  // };
  console.log(findData);
  return (
    <PageContainer>
      <Container>
        <CommonTitle>예약현황</CommonTitle>
        <Box>
          {/* <Typography>{findData?.officeName}</Typography>
          <Typography>{findData?.address?.city}</Typography>
        </Box>
        <Box>
          {findData.map((option: any, idx: any) => (
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
