import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className=" w-full">
      <div className="pl-5 fixed w-full bg-white z-40">
        <div><Navbar /></div>
      </div>
      <div className="min-h-screen"><Outlet /></div>
    </div>
  );
};

export default Main;
