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

function App() {
  return (
    <>
      <div className="d-flex vh_xl_100 flex-column">
        <Mynav />
        <MyHeroSection />
      </div>
      <OurPartner />
      <Clients />
      <PerfectSolution />
      {/* <ChooseUs /> */}
      <OurResearch />
      <OUrBlogs />
      {/* <OurTestonimals /> */}
      <GetTouch />
      <MyFotter/>
    </>
  );
}

export default App;
