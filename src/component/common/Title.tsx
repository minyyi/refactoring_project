import { ReactNode } from 'react';
import { Typography } from '@mui/material';

const Title = ({ children, sx }: { children: ReactNode; sx?: any }) => {
  return (
    <>
      <Typography
        sx={{
          textAlign: 'center',
          padding: 2,
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

export default Title;
