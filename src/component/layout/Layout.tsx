import { ReactNode, useEffect } from 'react';
import { Box } from '@mui/material';
import Footer from './footer/Footer';
import Appbar from './appbar/Appbar';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userid } from '@/lib/recoil/authAtom';

export const Layout = (props: { children: ReactNode }) => {
  const location = useLocation();
  const setId = useSetRecoilState<any>(userid);

  useEffect(() => {
    const id = localStorage.getItem('userid');
    setId(id);
    console.log('layout', id);
  }, []);

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
