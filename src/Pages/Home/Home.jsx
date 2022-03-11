import React from "react";
import NavMenu from "../../Components/NavMenu/NavMenu";
import Header1 from "../../Components/Header/Header1/Header1";
import Header2 from "../../Components/Header/Header2/Header2";
import Header3 from "../../Components/Header/Header3/Header3";
import Header4 from "../../Components/Header/Header4/Header4";
import Smartmeter from "../../Components/Smartmeter/Smartmeter";
import TabsComp from "../../Components/TabsComp/TabsComp";
// import AppFeatures from "../../Components/AppFeatures/AppFeatures";
import AboutusLandpage from "../../Components/AboutusLandpage/AboutusLandpage";
import Footer from "../../Components/Footer/Footer";
import HeaderButtons from "../../Components/buttons/HeaderButtons";
import "./Home.css";


function Home() {
  return (
    <>
      <NavMenu />
      <div className="main-header-wrapper">
        <div className="slider">
          <Header1 />
          <Header2 />
          <Header3 />
          <Header4 />
          <Header1 />
        </div>
      </div>
      <HeaderButtons />
      <Smartmeter />
      <TabsComp />
      {/* <AppFeatures /> */}
      <AboutusLandpage />
      <Footer />
    </>
  );
}

export default Home;
