import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './page/Home';
import { Layout } from './component/layout/Layout';
import LandingPage from './page/Landing';
import LoginPage from './page/Login';
import test from 'node:test';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage title={'로그인'} />} />
          <Route path="/signup" element={<LoginPage title={'회원가입'} />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default Router;
