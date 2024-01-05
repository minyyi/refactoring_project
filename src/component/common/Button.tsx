import { Button } from '@mui/material';
import { ReactNode } from 'react';

const CommonButton = ({
  children,
  sx,
  variant,
  onClick,
  others,
}: {
  children: ReactNode;
  sx?: any;
  variant?: any;
  onClick?: any;
  others?: any;
}) => {
  //   const theme = useTheme();
  return (
    <Button
      color="primary"
      sx={{ m: 1, ...sx }}
      variant={variant}
      onClick={onClick}
      component="label"
      // others={others}
    >
      {children}
    </Button>
  );
};
export default CommonButton;
// backgroundColor: 'secondary.main',
