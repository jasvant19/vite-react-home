import React from "react";
import HomeBanner from "../Homepage/HomeBanner";
import Aboutsection from "../Homepage/Aboutsection";
import Newsletter from "../Homepage/Newsletter";
import LatestProduct from "../Homepage/LatestProduct";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <Aboutsection />
      <LatestProduct />
      <Newsletter />
    </>
  );
};

export default Home;
