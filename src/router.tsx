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
import MyOffice from './page/agent/MyOffice';
import AddOffice from './page/agent/AddOffice';
import OfficeEdit from './page/agent/OfficeEdit';
import OfficeDatail from './page/agent/OfficeDatail';

const Router = () => {
  const context = useColorModeContext();
  useEffect(() => {
    const mode = localStorage.getItem('mode');
    context.setMode(mode || 'light');
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
          <Route path="/myoffice" element={<MyOffice />} />
          <Route path="/addoffice" element={<AddOffice />} />
          <Route path="/officeEdit/:id" element={<OfficeEdit />} />
          <Route path="/officeDatail" element={<OfficeDatail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default Router;
