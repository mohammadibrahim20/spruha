import Dashbord from "./Dashbord";
import Main from "./Main";

const HomeLayout = () => {
  return (
    <div className="">
      <div className="flex">
        <div className="hidden md:flex">
          <Dashbord />
        </div>
        <Main />
      </div>
    </div>
  );
};

export default HomeLayout;
