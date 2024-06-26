import { ReactNode } from 'react';
import { Box } from '@mui/material';
import Footer from './footer/Footer';
import Appbar from './appbar/Appbar';
import { useLocation } from 'react-router-dom';
import { authHook } from '@/utils/authHook';

const Layout = (props: { children: ReactNode }) => {
  const location = useLocation();
  console.log(location);
  authHook();

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
export default Layout;
