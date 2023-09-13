import Welcome from "../../components/Welcome";
import Chart from "./Chart";
import HomeBanner from "./HomeBanner";
import Stats from "./Stats";

const Home = () => {
  return (
    <div className="bg-[#e8ebf6] p-5 h-screen ">
      <Welcome />
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-5">
        <div className="cols-span-1  md:col-span-3 ">
          <HomeBanner />
          <Stats />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
