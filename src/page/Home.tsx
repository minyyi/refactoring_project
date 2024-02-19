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
} from '@mui/material';
import PageContainer from '@/component/common/PageContainer';
import CommonButton from '@/component/common/CommonButton';
import CommonInput from '@/component/common/CommonInput';
import CommonSelect from '@/component/common/CommonSelect';
import { selectLegion } from '@/utils/config';
import Search from '@/component/search/Search';
import OfficeCard from '@/component/common/OfficeCard';
import Title from '@/component/common/Title';
import Pagination from '@/component/common/Pagination';

const Home = () => {
  const navigate = useNavigate();

  const clickCard = () => {
    navigate('/reservation');
  };
  const [address, setAddress] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAddress(event.target.value as string);
  };

  useEffect(() => {
    console.log('mount');
    return () => {
      console.log('unmount');
    };
  }, []);
  return (
    <>
      <PageContainer>
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
            <OfficeCard onClick={clickCard} />
          </Box>
          <Pagination />
        </Container>
      </PageContainer>
    </>
  );
};

export default Home;
