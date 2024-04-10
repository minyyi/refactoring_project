import React, { useState } from 'react';
import { Box, FormControlLabel, Checkbox } from '@mui/material';
import { optionInfo } from '@/utils/config';
const Option = ({ option, handleSetOption }: any) => {
  // const defaultObject = optionInfo
  //메서드 체이닝
  // ?.map((optionObject) => {
  //   return optionObject?.key;
  // })
  // ?.reduce((acc, cur) => {
  //   return {
  //     ...acc,
  //     [cur]: false,
  //   };
  // }, {});
  const [checked, setChecked] = useState<any>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, checked } = event.target;

    setChecked(checked);
    handleSetOption({ name, value: checked });
    console.log(name, checked);
  };

  // console.log(checked);
  // console.log(defaultObject);
  return (
    <>
      {/* {optionInfo.map((option: any, idx: any) => ( */}
      <FormControlLabel
        label={option?.name}
        control={
          <Checkbox
            name={option?.key}
            checked={checked}
            onChange={handleChange}
            color="default"
          />
        }
      />
      {/* ))} */}
    </>
  );
};
export default Option;
