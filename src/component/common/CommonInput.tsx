import { TextField } from '@mui/material';

const CommonInput = ({ label, sx, value, onChange, ...others }: any) => {
  return (
    <>
      <TextField
        label={label}
        size="small"
        value={value}
        onChange={onChange}
        sx={{
          // margin: 1,
          ...sx,
        }}
        {...others}
      />
    </>
  );
};

export default CommonInput;
