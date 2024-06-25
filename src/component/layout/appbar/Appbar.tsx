import { AppBar, Toolbar, Container, useMediaQuery } from '@mui/material';
import WebAppbar from './web/WebAppbar';
import Profile from './web/Profile';
import MobileAppbar from './mobile/MobileAppbar';
import DarkmodeButton from './common/DarkmodeButton';
import { useLocation } from 'react-router-dom';
import { pathCase } from '@/utils/config';
import { useEffect } from 'react';
import { getDocs } from 'firebase/firestore';
import {
  auth,
  USER_COLLECTION,
  IMAGE,
  // useGetImage,
} from '@/lib/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';
import { userid } from '@/lib/recoil/authAtom';
import { cardData } from '@/lib/recoil/homeDataAtom';

function ResponsiveAppBar() {
  const matches = useMediaQuery((theme: any) => theme.breakpoints.down('md'));
  const { pathname } = useLocation();
  const setId = useSetRecoilState(userid);
  // const getUserInfo = useRecoilValue(userid);
  const setOfficeData = useSetRecoilState(cardData);
  console.log(USER_COLLECTION);
  /* checkAuth */
  useEffect(() => {
    onAuthStateChanged(auth, async (user: any) => {
      if (user) {
        localStorage.setItem('userid', user?.uid); //id 안바뀐다는 전제
        localStorage.setItem('token', user?.accessToken);
        const data = await getDocs(USER_COLLECTION);
        const images = await getDocs(IMAGE);

        const List: any = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc?.id,
        }));
        const find = List?.find((data: any) => data.userid === user?.uid);
        setId({
          id: find?.id,
          email: find?.email,
          name: find?.name,
          role: find?.role,
          bookmarks: find?.bookmarks || [],
        });
        console.log(data);
        console.log(List);
        console.log(find?.name, find?.role);
        localStorage.setItem('role', find?.role);
        console.log(user);
        console.log(user?.uid);
        console.log(setId);
        console.log(images);
        // console.log(images?.query);
      } else {
        console.log('유저없음');
      }
    });
  }, []);

  useEffect(() => {
    fetch(`https://${import.meta.env.VITE_BACKEND_URL}:5502/api/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res: any) => {
        return res.json();
      })
      .then((res: any) => {
        console.log(res);
        setOfficeData(res);
      });
  }, [pathname]);

  if (pathCase({ pathname })) return null;

  // const getImage = async ({}: any) => {
  //   await addDoc(useGetImage('users'), {
  //     // ...user,
  //   });
  // };

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
