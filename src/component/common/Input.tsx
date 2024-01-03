import { TextField, OutlinedInput } from '@mui/material';

const CommonInput = ({
  label,
  sx,
  type,
  id,
  InputProps,
}: {
  label?: string;
  sx?: any;
  type: any;
  id: any;
  endAdornment?: any;
  InputProps?: any;
}) => {
  return (
    <>
      <TextField
        label={label}
        size="small"
        InputProps={InputProps}
        type={type}
        id={id}
        sx={{
          margin: 1,
          ...sx,
        }}
      />
      {/* <OutlinedInput
        label={label}
        size="small"
        inputProps={inputProps}
        sx={{
          margin: 1,
          ...sx,
        }} */}
      {/* /> */}
    </>
  );
};

export default CommonInput;
