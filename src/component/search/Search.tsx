import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  MenuItem,
  MenuList,
  FormControl,
} from '@mui/material';

import CommonSelect from '../common/Select';
import { selectLegion, selectCity } from '@/utils/config';
import CommonButton from '../common/Button';
import CommonInputLabel from '../common/InputLabel';
import CommonInput from '../common/Input';

const Search = () => {
  const [selected, setSelected] = useState('');
  const [city, setCity] = useState('');

  //여러개 ? 하나의 함수 안에서 조건으로 => todo하던거
  const handleSelect1 = (e: any) => {
    setSelected(e.target.value);
  };
  const handleSelect2 = (e: any) => {
    setCity(e.target.value);
  };

  console.log(selected);
  console.log(selectCity[selected]);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 2,
          minWidth: 500,
          backgroundColor: 'secondary.dark',
          borderRadius: 5,
          padding: 4,
        }}
      >
        <FormControl>
          <CommonInputLabel>시/도</CommonInputLabel>
          <CommonSelect label="시/도" onChange={handleSelect1} value={selected}>
            {selectLegion.map((address: any, idx: any) => (
              <MenuItem key={idx} value={address.legion}>
                {address.legion}
              </MenuItem>
            ))}
          </CommonSelect>
        </FormControl>

        <FormControl>
          <CommonInputLabel>시/군/구</CommonInputLabel>
          <CommonSelect
            label="시/군/구"
            onChange={handleSelect2}
            disabled={!selected}
          >
            {selectCity?.[selected]?.map((address: any, idx: any) => (
              <MenuItem key={idx} value={address}>
                {address}
              </MenuItem>
            ))}
          </CommonSelect>
        </FormControl>

        <CommonInput placeholder="읍/면/동/리" size="normal" />
        <CommonButton size={'medium'}>검색</CommonButton>
      </Box>
    </>
  );
};
export default Search;
