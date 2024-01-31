import { ReactNode, useState } from 'react';
import {
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';

const CommonSelect = ({ children, label, value, onChange, ...others }: any) => {
  return (
    <>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        color="secondary"
        value={value}
        label={label}
        onChange={onChange}
        sx={{ width: 200 }}
        {...others}
      >
        {children}
      </Select>
    </>
  );
};

export default CommonSelect;
