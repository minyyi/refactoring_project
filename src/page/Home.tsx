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
import Title from '@/component/common/Title';
import { useRecoilState } from 'recoil';
import { homeData } from '@/lib/recoil/homeDataAtom';

const Home = () => {
  const [text, setText] = useRecoilState(homeData);
  const filterdData = [...text];

  // const navigate = useNavigate();

  // const clickCard = () => {
  //   navigate('/reservation');
  // };
  const [address, setAddress] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAddress(event.target.value as string);
  };

  // useEffect(() => {
  //   console.log('mount');
  //   return () => {
  //     console.log('unmount');
  //   };
  // }, []);
  console.log(text);
  return (
    <>
      <PageContainer
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
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
          <Title>오피스 목록</Title>
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
