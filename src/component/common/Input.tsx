import { TextField } from '@mui/material';

const CommonInput = ({
  label,
  sx,
  name,
  type,
  id,
  InputProps,
  value,
  placeholder,
  onChange,
  ...others
}: {
  label: string;
  sx?: any;
  name: any;
  type: any;
  id?: any;
  endAdornment?: any;
  InputProps?: any;
  value?: any;
  placeholder?: string;
  onChange?: any;
  others?: any;
}) => {
  return (
    <>
      <TextField
        label={'label'}
        size="small"
        InputProps={InputProps}
        name={name}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        {...others}
        sx={{
          margin: 1,
          ...sx,
        }}
      />
    </>
  );
};

export default CommonInput;
