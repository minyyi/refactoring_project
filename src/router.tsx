import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './page/Home';
import { Layout } from './component/layout/Layout';
import LandingPage from './page/Landing';
import Authpage from './page/Authpage';
import Reservation from './page/Reservation';
import { useEffect } from 'react';
import { useColorModeContext } from './provider/darkmode/DarkmodeProvider';
import NotiMsg from './page/NotiMsg';
import Mypage from './page/Mypage';
import MyReservation from './page/MyReservation';
import Bookmark from './page/Bookmark';

const Router = () => {
  const context = useColorModeContext();
  useEffect(() => {
    const mode = localStorage.getItem('mode');
    console.log('router', mode);
    context.setMode(mode);
  }, []);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Authpage title={'로그인'} />} />
          <Route path="/signup" element={<Authpage title={'회원가입'} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reservation/:id" element={<Reservation />} />
          <Route path="/noti" element={<NotiMsg />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/myreservation" element={<MyReservation />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default Router;
