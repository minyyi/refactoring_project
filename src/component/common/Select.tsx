import { useState } from 'react';
import {
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';

const CommonSelect = () => {
  const [address, setAddress] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAddress(event.target.value as string);
  };

  return (
    <>
      <FormControl>
        <InputLabel id="demo-simple-select-label">시/도</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          color="secondary"
          value={address}
          label="시/군/구"
          onChange={handleChange}
          sx={{ width: 100 }}
        >
          <MenuItem value={'서울특별시'}>서울특별시</MenuItem>
          <MenuItem value={'부산광역시'}>부산광역시</MenuItem>
          <MenuItem value={'인천광역시'}>인천광역시</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default CommonSelect;
