import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Select,
  Typography,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  Pagination,
} from '@mui/material';
import PageContainer from '@/component/common/PageContainer';
import Search from '@/component/search/Search';
import CardList from '@/component/list/CardList';
import CommonTitle from '@/component/common/CommonTitle';
import { useRecoilState } from 'recoil';
import { cardData } from '@/lib/recoil/homeDataAtom';
import { authHook } from '@/utils/authHook';
import BookmakrButton from '@/component/common/BookmarkButton';

const Home = () => {
  const [card, setCard] = useRecoilState(cardData);
  const filterdData = [...card];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigator = useNavigate();

  // const clickCard = () => {
  //   navigate('/reservation');
  // };
  const [address, setAddress] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAddress(event.target.value as string);
  };

  // const getId = authHook();

  useEffect(() => {
    const testApi = () => {
      let test = fetch('https://jsonplaceholder.typicode.com/users')
        .then((res: any) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
          setLoading(false);
          return res;
        });
      // console.log(test);
    };
    testApi();
  }, []);

  // console.log(data);
  // console.log(card);
  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <Typography sx={{ fontSize: 100 }}>로딩중</Typography>
        </Box>
      ) : (
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
              {/* <BookmakrButton /> */}
              <CardList />
              {/* {cardData.filter((val) =>{
          if(searchTerm == ""){
            return val
          }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        }
        }).map(data =>{
          return <CardList />
        })}
 */}
            </Box>
          </Container>
          <Pagination sx={{ mt: 3 }} />
        </PageContainer>
      )}
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
