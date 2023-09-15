import Footer from "../../Shared/Footer/Footer";
import Welcome from "../../components/Welcome";
import Launch from "./Aside/Launch";
import OnGoing from "./Aside/OnGoing";
import Recent from "./Aside/Recent";
import WebsiteDesign from "./Aside/WebsiteDesign";
import Chart from "./Chart";
import HomeBanner from "./HomeBanner";
import LastTask from "./LastTask";
import Stats from "./Stats";
import Task from "./Task";

const Home = () => {
  return (
    <div className="bg-[#e8ebf6] h-screen md:mt-20 mt-16 ">
      <Welcome />
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-5 p-5 bg-[#e8ebf6] ">
        <div className="cols-span-1  md:col-span-3 ">
          <HomeBanner />
          <Stats />
          <Chart />
          <Task />
          <LastTask />
        </div>
        <div className="col-span-1 sm:col-span-2 mt-5">
          <Recent />
          <Launch />
          <OnGoing />
          <WebsiteDesign />
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default Home;
