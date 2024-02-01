import { TextField } from '@mui/material';

const CommonInput = ({ label, sx, value, onChange, ...others }: any) => {
  return (
    <>
      <TextField
        label={label}
        size="small"
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
