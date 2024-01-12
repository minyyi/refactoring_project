import { ReactNode } from 'react';
import { Box, Stack } from '@mui/material';
import Footer from './footer/Footer';
import Appbar from './appbar/Appbar';
import { useLocation } from 'react-router-dom';

export const Layout = (props: { children: ReactNode }) => {
  const location = useLocation();
  console.log(location);
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
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            // height: '100%',
          }}
        >
          {props.children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};
