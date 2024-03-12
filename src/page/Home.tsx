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
import CommonButton from '@/component/common/CommonButton';
import CommonInput from '@/component/common/CommonInput';
import CommonSelect from '@/component/common/CommonSelect';
import { selectLegion } from '@/utils/config';
import Search from '@/component/search/Search';
import CardList from '@/component/list/CardList';
import CommonTitle from '@/component/common/CommonTitle';
import { useRecoilState } from 'recoil';
import { cardData } from '@/lib/recoil/homeDataAtom';
import { authHook } from '@/utils/authHook';

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
          console.log('두번째then', res);
          setLoading(false);
          return res;
        });
      console.log(test);
    };
    testApi();
  }, []);

  console.log(data);
  console.log(card);
  return (
    <>
      {loading ? (
        <Typography>로딩중</Typography>
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
              <CardList />
            </Box>
          </Container>
          <Pagination sx={{ mt: 3 }} />
        </PageContainer>
      )}
    </>
  );
};

export default Home;
