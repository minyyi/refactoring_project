import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
// import Home from './page/Home';
// import { Layout } from './component/layout/Layout';
import LandingPage from './page/Landing';
import Authpage from './page/Authpage';
import Reservation from './page/Reservation';
import { useEffect, Suspense, lazy } from 'react';
import { useColorModeContext } from './provider/darkmode/DarkmodeProvider';
import NotiMsg from './page/NotiMsg';
// import Mypage from './page/Mypage';
// import MyReservation from './page/MyReservation';
import Bookmark from './page/Bookmark';
// import MyOffice from './page/agent/MyOffice';
// import AddOffice from './page/agent/AddOffice';
// import OfficeEdit from './page/agent/OfficeEdit';
import OfficeDatail from './page/agent/OfficeDatail';
import { ErrorBoundary } from 'react-error-boundary';
import Loading from './component/common/Loading';

const Home = lazy(() => import('./page/Home'));
const Layout = lazy(() => import('./component/layout/Layout'));
const Mypage = lazy(() => import('./page/Mypage'));
const MyReservation = lazy(() => import('./page/MyReservation'));
const MyOffice = lazy(() => import('./page/agent/MyOffice'));
const AddOffice = lazy(() => import('./page/agent/AddOffice'));
const OfficeEdit = lazy(() => import('./page/agent/OfficeEdit'));
const Router = () => {
  const context = useColorModeContext();
  useEffect(() => {
    const mode = localStorage.getItem('mode');
    context.setMode(mode || 'light');
  }, []);
  return (
    <ErrorBoundary
      FallbackComponent={OurFallbackComponent}

      // fallback={<p>⚠️Something went wrong</p>}
    >
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </ErrorBoundary>
  );
};
export default Router;

const OurFallbackComponent = ({ error, resetErrorBoundary }: any) => {
  const navigator = useNavigate();
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={() => navigator('/')}>돌아가기</button>
    </div>
  );
};
