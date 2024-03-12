import { ReactNode } from 'react';
import { Typography } from '@mui/material';

const CommonTitle = ({ children, sx }: { children: ReactNode; sx?: any }) => {
  return (
    <>
      <Typography
        sx={{
          textAlign: 'flex-start',
          py: 2,
          px: 3,
          fontWeight: 600,
          fontSize: 20,
          ...sx,
        }}
      >
        {children}
      </Typography>
    </>
  );
};

export default CommonTitle;
