import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./page/MainPage";
import { Layout } from "./component/layout/Layout";


const Router = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default Router;
