import { useState } from 'react';
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
import CommonButton from '@/component/common/Button';
import CommonInput from '@/component/common/Input';
import CommonSelect from '@/component/common/Select';
import { selectLegion } from '@/utils/config';
import Search from '@/component/search/Search';
import OfficeCard from '@/component/common/OfficeCard';
import Title from '@/component/common/Title';
import Pagination from '@/component/common/Pagination';

const Home = () => {
  const [address, setAddress] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAddress(event.target.value as string);
  };
  return (
    <>
      <PageContainer>
        <Container
          sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}
        >
          <Search />
        </Container>
        <Container sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Title>오피스 목록</Title>
        </Container>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <OfficeCard />
        </Box>
        <Pagination />
      </PageContainer>
    </>
  );
};

export default Home;
