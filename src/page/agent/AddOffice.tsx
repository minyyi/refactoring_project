import { useState } from 'react';
import CommonInput from '@/component/common/CommonInput';
import CommonInputLabel from '@/component/common/CommonInputLabel';
import CommonSelect from '@/component/common/CommonSelect';
import CommonTitle from '@/component/common/CommonTitle';
import PageContainer from '@/component/common/PageContainer';
import {
  Container,
  FormControl,
  Box,
  Typography,
  MenuItem,
} from '@mui/material';
import { selectLegion, selectCity } from '@/utils/config';
import Option from '@/component/common/Option';

const AddOffice = () => {
  const [selected, setSelected] = useState('');
  const [city, setCity] = useState('');
  const [town, setTown] = useState<any>({
    town: '',
  });
  const handleSelect1 = (e: any) => {
    setSelected(e.target.value);
  };
  const handleSelect2 = (e: any) => {
    setCity(e.target.value);
  };

  const handleFormData = (e: any) => {
    let { name, value } = e.target;
    console.log({ name, value });
    setTown({ [name]: value });
  };

  return (
    <PageContainer>
      <Container>
        <CommonTitle>오피스 추가하기</CommonTitle>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            rowGap: 2,
            padding: 2,
          }}
        >
          <Typography>이름</Typography>
          <CommonInput
            size="normal"
            label={'오피스 이름'}
            type="text"
            sx={{ width: 400 }}
          ></CommonInput>
          <Typography>주소</Typography>
          <FormControl sx={{ display: 'flex', width: 400 }}>
            <CommonInputLabel>시/도</CommonInputLabel>
            <CommonSelect
              label="시/도"
              onChange={handleSelect1}
              value={selected}
              //   sx={{ width: 400 }}
            >
              {selectLegion.map((address: any, idx: any) => (
                <MenuItem key={idx} value={address.legion}>
                  {address.legion}
                </MenuItem>
              ))}
            </CommonSelect>
          </FormControl>

          <FormControl sx={{ display: 'flex', width: 400 }}>
            <CommonInputLabel>시/군/구</CommonInputLabel>
            <CommonSelect
              label="시/군/구"
              onChange={handleSelect2}
              disabled={!selected}
              value={city}
              //   sx={{ width: 400 }}
            >
              {/* {selectCity?.[selected]?.map((city: any, idx: any) => (
                <MenuItem key={idx} value={city}>
                  {city}
                </MenuItem>
              ))} */}
            </CommonSelect>
          </FormControl>

          <CommonInput
            sx={{ display: 'flex', width: 400 }}
            size="normal"
            label={'읍/면/동/리'}
            type="text"
            name="town"
            value={town?.town}
            onChange={handleFormData}
          />
          <Box sx={{}}>
            <Typography>옵션</Typography>
            <Option />
          </Box>
        </Box>
      </Container>
    </PageContainer>
  );
};
export default AddOffice;
