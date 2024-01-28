import React from 'react';
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

const Search = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: 2,
          minWidth: 500,
          backgroundColor: 'secondary.dark',
          borderRadius: 5,
          padding: 4,
        }}
      >
        <FormControl>
          <CommonInputLabel>시/도</CommonInputLabel>
          <CommonSelect label="시/도">
            {selectLegion.map((address: any, idx: any) => (
              <MenuItem key={idx} value={address.legion}>
                {address.legion}
              </MenuItem>
            ))}
          </CommonSelect>
        </FormControl>

        <FormControl>
          <CommonInputLabel>시/군/구</CommonInputLabel>
          <CommonSelect label="시/군/구">
            {selectLegion.map((address: any, idx: any) => (
              <MenuItem key={idx} value={address.city}>
                {address.city}
              </MenuItem>
            ))}
          </CommonSelect>
        </FormControl>

        <CommonButton>검색</CommonButton>
      </Box>
    </>
  );
};
export default Search;
