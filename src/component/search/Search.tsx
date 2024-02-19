import { useState } from 'react';
import { Box, MenuItem, FormControl } from '@mui/material';

import CommonSelect from '../common/CommonSelect';
import { selectLegion, selectCity } from '@/utils/config';
import CommonButton from '../common/CommonButton';
import CommonInputLabel from '../common/CommonInputLabel';
import CommonInput from '../common/CommonInput';

const Search = () => {
  const [selected, setSelected] = useState('');
  const [city, setCity] = useState('');
  const [town, setTown] = useState('');

  // const [test, setTest] = useState({
  //   legion: '',
  //   city: '',
  // });

  //여러개 ? 하나의 함수 안에서 조건으로 => todo하던거
  const handleSelect1 = (e: any) => {
    setSelected(e.target.value);
  };
  const handleSelect2 = (e: any) => {
    setCity(e.target.value);
  };

  const handleFormData = (e: any) => {
    let { name, value } = e.target;
    console.log({ name, value });
    // setTown((prev) => {
    //   return [...prev, { name, value }];
    // });
  };

  const handleReset = () => {
    setSelected('');
    setCity('');
    setTown('');
  };

  console.log(selected);
  console.log(selectCity[selected]);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { sm: 'row', xs: 'column' },
          alignItems: 'center',
          columnGap: 2,
          rowGap: 1,
          maxWidth: { sm: 1000, xs: '100%' },
          width: { sm: 'auto', xs: '100%' },
          backgroundColor: 'secondary.dark',
          borderRadius: 5,
          padding: 4,
        }}
      >
        <FormControl
          sx={{ display: 'flex', width: { md: 200, sm: 100, xs: '100%' } }}
        >
          <CommonInputLabel>시/도</CommonInputLabel>
          <CommonSelect
            label="시/도"
            onChange={handleSelect1}
            value={selected}
            sx={{}}
          >
            <MenuItem aria-label="None" value="">
              선택안함
            </MenuItem>

            {selectLegion.map((address: any, idx: any) => (
              <MenuItem key={idx} value={address.legion}>
                {address.legion}
              </MenuItem>
            ))}
          </CommonSelect>
        </FormControl>

        <FormControl
          sx={{ display: 'flex', width: { md: 200, sm: 100, xs: '100%' } }}
        >
          <CommonInputLabel>시/군/구</CommonInputLabel>
          <CommonSelect
            label="시/군/구"
            onChange={handleSelect2}
            disabled={!selected}
            value={city}
          >
            {selectCity?.[selected]?.map((city: any, idx: any) => (
              <MenuItem key={idx} value={city}>
                {city}
              </MenuItem>
            ))}
          </CommonSelect>
        </FormControl>

        <CommonInput
          sx={{ display: 'flex', width: { md: 200, sm: 100, xs: '100%' } }}
          size="normal"
          label={'읍/면/동/리'}
          type="text"
          // name="town"
          value={town}
          onChange={handleFormData}
        />
        <CommonButton size={'medium'}>검색</CommonButton>
        <CommonButton size={'medium'} onClick={handleReset}>
          초기화
        </CommonButton>
      </Box>
    </>
  );
};
export default Search;
