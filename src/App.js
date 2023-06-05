import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Mynav from "./components/Mynav";
import MyHeroSection from "./components/MyHeroSection";
import OurPartner from "./components/OurPartner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Clients from "./components/Clients";
import PerfectSolution from "./components/PerfectSolution";
import ChooseUs from "./components/ChooseUs";
import OUrBlogs from "./components/OUrBlogs";
import OurTestonimals from "./components/OurTestonimals";
import OurResearch from "./components/OurResearch";
import GetTouch from "./components/GetTouch";
import MyFotter from "./components/MyFotter";
import { useEffect, useState } from "react";
import Nav_logo from "./assets/img/svg/nav_logo.svg";

function App() {
  const [loader, setloader] = useState(false);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 5000);
  }, []);
  return (
    <>
      <>
        {loader ? (
          <div className="preloader-bg d-flex align-items-center justify-content-center">
            <div className="preloader">
              <img src={Nav_logo} alt="Nav_logo" />
            </div>
          </div>
        ) : (
          <>
            <div className="d-flex vh_xl_100 flex-column">
              <Mynav />
              <MyHeroSection />
            </div>
            <OurPartner />
            <Clients />
            <PerfectSolution />
            <ChooseUs />
            <OurResearch />
            <OUrBlogs />
            <OurTestonimals />
            <GetTouch />
            <MyFotter />
          </>
        )}
      </>
    </>
  );
}

export default App;
