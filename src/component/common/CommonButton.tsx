import { Button } from '@mui/material';
import { ReactNode } from 'react';

const CommonButton = ({ children, sx, ...others }: any) => {
  return (
    <Button
      color="primary"
      variant="contained"
      sx={{
        m: 1,
        maxWidth: 600,
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
