import { ReactNode } from 'react';
import { Box } from '@mui/material';
import Footer from './footer/Footer';
import Appbar from './appbar/Appbar';

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Appbar />
        <Box
          sx={{
            // py: 2,
            flexGrow: 1,
          }}
        >
          {props.children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};
