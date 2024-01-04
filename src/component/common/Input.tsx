import { TextField } from '@mui/material';

const CommonInput = ({
  label,
  sx,
  type,
  id,
  InputProps,
  value,
}: {
  label?: string;
  sx?: any;
  type: any;
  id: any;
  endAdornment?: any;
  InputProps?: any;
  value?: any;
}) => {
  return (
    <>
      <TextField
        label={label}
        size="small"
        InputProps={InputProps}
        type={type}
        id={id}
        value={value}
        sx={{
          margin: 1,
          ...sx,
        }}
      />
    </>
  );
};

export default CommonInput;
