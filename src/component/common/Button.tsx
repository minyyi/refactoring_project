import { Button } from '@mui/material';

const CommonButton = ({ children, sx, size, ...others }: any) => {
  //   const theme = useTheme();
  console.log(others);
  return (
    <Button
      color="primary"
      variant="contained"
      sx={{
        m: 1,
        maxWidth: 600,
        color: others.variant === 'contained' ? '' : 'inherit',
        ...sx,
      }}
      {...others}
    >
      {children}
    </Button>
  );
};
export default CommonButton;
// backgroundColor: 'secondary.main',
