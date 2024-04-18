import { AppBar, Toolbar, Container, useMediaQuery } from '@mui/material';
import WebAppbar from './web/WebAppbar';
import Profile from './web/Profile';
import MobileAppbar from './mobile/MobileAppbar';
import DarkmodeButton from './common/DarkmodeButton';
import { useLocation } from 'react-router-dom';
import { pathCase } from '@/utils/config';
import { useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db, USER_COLLECTION } from '@/firebase';

function ResponsiveAppBar() {
  const matches = useMediaQuery((theme: any) => theme.breakpoints.down('md'));
  const { pathname } = useLocation();

  useEffect(() => {
    const id = localStorage.getItem('userid');
    const getDetail = async () => {
      const data = await getDocs(USER_COLLECTION);
      const List = data.docs.map((doc) => ({ ...doc.data() }));
      const find = List?.find((data) => data.userid === id);
      console.log(find);
    };

    getDetail();
  }, []);
  if (pathCase({ pathname })) return null;

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? '#fff' : '#121212',
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: {
              md: '',
              xs: 'space-between',
            },
          }}
        >
          {/* 900이상 */}
          {!matches && (
            <>
              <WebAppbar />
              <DarkmodeButton />
              <Profile />
            </>
          )}
          {/* 반응형 */}
          {matches && (
            <>
              <MobileAppbar />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
