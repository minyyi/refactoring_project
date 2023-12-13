import { Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import Layout from "./component/layout/Layout";

const Router = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Layout>
    </>
  );
};
export default Router;
