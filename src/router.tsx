import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import LandingPage from './page/Landing';
import Authpage from './page/Authpage';
import Reservation from './page/Reservation';
import { useEffect, Suspense } from 'react';
import { useColorModeContext } from './provider/darkmode/DarkmodeProvider';
import NotiMsg from './page/NotiMsg';
import Bookmark from './page/Bookmark';
import OfficeDatail from './page/agent/OfficeDatail';
import { ErrorBoundary } from 'react-error-boundary';
import Loading from './component/common/Loading';
import Homepage from './page/Homepage';
import Layout from './component/layout/Layout';
import MyReservation from './page/MyReservation';
import Mypage from './page/Mypage';
import AddOffice from './page/agent/AddOffice';
import OfficeEdit from './page/agent/OfficeEdit';

// const LandingPage = lazy(() => import('./page/Landing'));
// const Authpage = lazy(() => import('./page/Authpage'));
// const Reservation = lazy(() => import('./page/Reservation'));
// const NotiMsg = lazy(() => import('./page/NotiMsg'));
// const Bookmark = lazy(() => import('./page/Bookmark'));
// const OfficeDatail = lazy(() => import('./page/agent/OfficeDatail'));
// const Homepage = lazy(() => import('./page/Homepage'));
// const Layout = lazy(() => import('./component/layout/Layout'));
// const Mypage = lazy(() => import('./page/Mypage'));
// const MyReservation = lazy(() => import('./page/MyReservation'));
// const AddOffice = lazy(() => import('./page/agent/AddOffice'));
// const OfficeEdit = lazy(() => import('./page/agent/OfficeEdit'));

const Router = () => {
  const preloadComponent = (factory: () => Promise<any>) => {
    factory();
  };

  useEffect(() => {
    preloadComponent(() => import('./page/Homepage'));
  }, []);

  const context = useColorModeContext();
  useEffect(() => {
    const mode = localStorage.getItem('mode');

    context.setMode(mode || 'light');
  }, []);
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  <LandingPage />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <ErrorBoundary FallbackComponent={OurFallbackComponent}>
                  <Routes>
                    <Route
                      path="/login"
                      element={
                        <Suspense fallback={<Loading />}>
                          <Authpage title={'로그인'} />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/signup"
                      element={
                        <Suspense fallback={<Loading />}>
                          <Authpage title={'회원가입'} />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/home"
                      element={
                        <Suspense fallback={<Loading />}>
                          <Homepage />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/reservation/:id"
                      element={
                        <Suspense fallback={<Loading />}>
                          <Reservation />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/noti"
                      element={
                        <Suspense fallback={<Loading />}>
                          <NotiMsg />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/mypage"
                      element={
                        <Suspense fallback={<Loading />}>
                          <Mypage />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/myreservation"
                      element={
                        <Suspense fallback={<Loading />}>
                          <MyReservation />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/bookmark"
                      element={
                        <Suspense fallback={<Loading />}>
                          <Bookmark />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/addoffice"
                      element={
                        <Suspense fallback={<Loading />}>
                          <AddOffice />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/officeEdit/:id"
                      element={
                        <Suspense fallback={<Loading />}>
                          <OfficeEdit />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/officeDatail"
                      element={
                        <Suspense fallback={<Loading />}>
                          <OfficeDatail />
                        </Suspense>
                      }
                    />
                  </Routes>
                </ErrorBoundary>
              }
            />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
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
