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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              columnGap: 2,
              minWidth: 500,
              // backgroundColor: '#cecece',
              borderRadius: 5,
              padding: 4,
            }}
          >
            <CommonSelect></CommonSelect>
            <FormControl>
              <InputLabel id="demo-simple-select-label">시/군/구</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                color="secondary"
                value={address}
                label="시/군/구"
                onChange={handleChange}
                sx={{ width: 100 }}
              >
                <MenuItem value={'강남구'}>강남구</MenuItem>
                <MenuItem value={'강동구'}>강동구</MenuItem>
                <MenuItem value={'강북구'}>강북구</MenuItem>
              </Select>
              {/* <CommonInput /> */}
            </FormControl>

            <Box>박스글자는?</Box>
            <Typography>타이포그래피</Typography>
            <CommonButton variant={'outlined'} sx={{ color: 'inherit' }}>
              원래 글자
            </CommonButton>
          </Box>
        </Container>
      </PageContainer>
    </>
  );
};

export default Home;
