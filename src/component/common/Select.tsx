import { ReactNode, useState } from 'react';
import {
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';

const CommonSelect = ({
  children,
  label,
  value,
}: {
  children: ReactNode;
  label?: string;
  value?: any;
}) => {
  const [address, setAddress] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAddress(event.target.value as string);
  };

  return (
    <>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        color="secondary"
        value={address}
        label={label}
        onChange={handleChange}
        sx={{ width: 100 }}
      >
        {children}
      </Select>
    </>
  );
};

export default CommonSelect;
