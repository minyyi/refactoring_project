import React from "react";
import Layout from "../component/layout/Layout";
import Carousel from "../component/common/Carousel";
import Search from "../component/common/Search";

const MainPage = () => {
  return (
    <Layout>
      <Carousel />
      <Search />
    </Layout>
  );
};

export default MainPage;
