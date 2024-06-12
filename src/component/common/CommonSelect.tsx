import { Select } from '@mui/material';

const CommonSelect = ({
  children,
  label,
  value,
  onChange,
  sx,
  ...others
}: any) => {
  return (
    <>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        color="secondary"
        value={value}
        label={label}
        onChange={onChange}
        sx={{ width: '100%', ...sx }}
        {...others}
      >
        {children}
      </Select>
    </>
  );
};

export default CommonSelect;
