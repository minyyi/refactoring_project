import React, { useState } from 'react';
import { CheckBox } from '@mui/icons-material';
import { Box, FormControlLabel, Checkbox } from '@mui/material';
import { optionInfo } from '@/utils/config';
const Option = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };

  return (
    <>
      {optionInfo.map((option: any, idx: any) => (
        <FormControlLabel
          key={idx}
          label={option.name}
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              color="default"
            />
          }
        />
      ))}
    </>
  );
};
export default Option;
