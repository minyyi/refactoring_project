import { AppBar, Toolbar, Container, useMediaQuery } from '@mui/material';
import WebAppbar from './web/WebAppbar';
import Profile from './web/Profile';
import MobileAppbar from './mobile/MobileAppbar';
import DarkmodeButton from './common/DarkmodeButton';
import { useLocation } from 'react-router-dom';
import { pathCase } from '@/utils/config';
import { useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { auth, db, USER_COLLECTION } from '@/lib/firebase/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userid } from '@/lib/recoil/authAtom';

function ResponsiveAppBar() {
  const matches = useMediaQuery((theme: any) => theme.breakpoints.down('md'));
  const { pathname } = useLocation();
  const setId = useSetRecoilState(userid);
  const getUserInfo = useRecoilValue(userid);
  console.log(getUserInfo);
  // useEffect(() => {
  //   const id = localStorage.getItem('userid');
  //   const getDetail = async () => {
  //     const data = await getDocs(USER_COLLECTION);
  //     const List = data.docs.map((doc) => ({ ...doc.data() }));
  //     const find = List?.find((data) => data.userid === id);
  //     console.log(find);
  //   };

  //   getDetail();
  // }, []);

  /* checkAuth */
  useEffect(() => {
    onAuthStateChanged(auth, async (user: any) => {
      if (user) {
        localStorage.setItem('userid', user?.uid); //id 안바뀐다는 전제
        localStorage.setItem('token', user?.accessToken);
        const data = await getDocs(USER_COLLECTION);
        const List = data.docs.map((doc) => ({ ...doc.data() }));
        const find = List?.find((data) => data.userid === user?.uid);
        setId({ name: find?.name, role: find?.role });

        console.log(List);
        console.log(find?.name, find?.role);
        localStorage.setItem('role', find?.role);
        console.log(user);
        console.log(user?.uid);
        console.log(setId);
        fetch('http://localhost:5502/api/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
          .then((res: any) => {
            return res.json();
          })
          .then((res: any) => {
            console.log(res);
          });
      } else {
        console.log('유저없음');
      }
    });
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
