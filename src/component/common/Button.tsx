import { Button } from '@mui/material';
import { ReactNode } from 'react';

const CommonButton = ({
  children,
  sx,
  variant,
  onClick,
}: {
  children: ReactNode;
  sx?: any;
  variant?: any;
  onClick?: any;
}) => {
  //   const theme = useTheme();
  return (
    <Button
      color="secondary"
      sx={{ m: 1, ...sx }}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
export default CommonButton;
// backgroundColor: 'secondary.main',
