import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './page/Home';
import { Layout } from './component/layout/Layout';
import LandingPage from './page/Landing';
import Authpage from './page/Authpage';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Authpage title={'로그인'} />} />
          <Route path="/signup" element={<Authpage title={'회원가입'} />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default Router;
