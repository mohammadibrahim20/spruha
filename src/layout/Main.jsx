import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className=" w-full">
      <div className="fixed w-full md:w-5/6 bg-white border-b-2 drop-shadow-md z-40 px-5">
       <Navbar />
      </div>
      <div className="min-h-screen"><Outlet /></div>
    </div>
  );
};

export default Main;
