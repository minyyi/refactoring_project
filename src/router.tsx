import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import LandingPage from './page/Landing';
import Authpage from './page/Authpage';
import Reservation from './page/Reservation';
import { useEffect, Suspense, lazy } from 'react';
import { useColorModeContext } from './provider/darkmode/DarkmodeProvider';
import NotiMsg from './page/NotiMsg';
import Bookmark from './page/Bookmark';
import OfficeDatail from './page/agent/OfficeDatail';
import { ErrorBoundary } from 'react-error-boundary';
import Loading from './component/common/Loading';

const Homepage = lazy(() => import('./page/Homepage'));
const Layout = lazy(() => import('./component/layout/Layout'));
const Mypage = lazy(() => import('./page/Mypage'));
const MyReservation = lazy(() => import('./page/MyReservation'));
const AddOffice = lazy(() => import('./page/agent/AddOffice'));
const OfficeEdit = lazy(() => import('./page/agent/OfficeEdit'));
const Router = () => {
  const context = useColorModeContext();
  useEffect(() => {
    const mode = localStorage.getItem('mode');

    context.setMode(mode || 'light');
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="*"
              element={
                <ErrorBoundary FallbackComponent={OurFallbackComponent}>
                  <Routes>
                    <Route
                      path="/login"
                      element={<Authpage title={'로그인'} />}
                    />
                    <Route
                      path="/signup"
                      element={<Authpage title={'회원가입'} />}
                    />
                    <Route path="/home" element={<Homepage />} />
                    <Route path="/reservation/:id" element={<Reservation />} />
                    <Route path="/noti" element={<NotiMsg />} />
                    <Route path="/mypage" element={<Mypage />} />
                    <Route path="/myreservation" element={<MyReservation />} />
                    <Route path="/bookmark" element={<Bookmark />} />
                    <Route path="/addoffice" element={<AddOffice />} />
                    <Route path="/officeEdit/:id" element={<OfficeEdit />} />
                    <Route path="/officeDatail" element={<OfficeDatail />} />
                  </Routes>
                </ErrorBoundary>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
};
export default Router;

const OurFallbackComponent = ({ error }: any) => {
  const navigator = useNavigate();
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={() => navigator('/')}>돌아가기</button>
    </div>
  );
};
