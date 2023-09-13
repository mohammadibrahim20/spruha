import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className=" h-14 w-full px-5">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
