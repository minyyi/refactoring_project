import { Box, Container, Pagination } from '@mui/material';
import PageContainer from '@/component/common/PageContainer';
import Search from '@/component/search/Search';
import CardList from '@/component/list/CardList';
import CommonTitle from '@/component/common/CommonTitle';
import { useRecoilState } from 'recoil';
import { cardData } from '@/lib/recoil/homeDataAtom';

const Home = () => {
  const [card, setCard] = useRecoilState(cardData);
  const filterdData = [...card];
  // const [address, setAddress] = useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAddress(event.target.value as string);
  // };

  // const getId = authHook();

  // console.log(data);
  console.log(filterdData);
  console.log(setCard);

  return (
    <>
      <PageContainer
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Container
          sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}
        >
          <Search />
        </Container>
        <Container
          sx={{
            display: 'flex',
            justifyContent: { sm: 'flex-start', xs: 'center' },
          }}
        ></Container>
        <Container>
          <CommonTitle>오피스 목록</CommonTitle>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CardList />
          </Box>
        </Container>
        <Pagination sx={{ mt: 3 }} />
      </PageContainer>
    </>
  );
};

export default Home;

// 면접
// const calSum = (지역명, data) => {
//   let index = data?.findIndex((infoObject, idx)=> infoObject?.name === 지역명)
//   let filteredArray = data?.slice(0, index+1)
//   let sum = filteredArray?.reduce((acc, cur)=>{
//     let totalPrice = cur?.eat + cur?.sleep
//     return acc + totalPrice
//    },0)
//   return sum
// }
