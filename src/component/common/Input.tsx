import { TextField } from '@mui/material';

const CommonInput = ({
  label,
  sx,
  type,
  id,
  InputProps,
  value,
  onChange,
  others,
}: {
  label?: string;
  sx?: any;
  type: any;
  id: any;
  endAdornment?: any;
  InputProps?: any;
  value?: any;
  onChange?: any;
  others?: any;
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
        onChange={onChange}
        // others={others}
        sx={{
          margin: 1,
          ...sx,
        }}
      />
    </>
  );
};

export default CommonInput;
