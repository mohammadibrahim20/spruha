import { useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Dashbord from "./Dashbord";
import Main from "./Main";

const HomeLayout = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className="fixed w-full mt-0 overflow-hidden mb-0">
        <Navbar open={open} setOpen={setOpen} />
      </div>
      <div className="flex transition-width duration-500 ease-in-out z-50 ">
        <div className={`md:flex ${open ? "w-[241px] hidden" : "w-20 "}`}>
           <Dashbord open={open} setOpen={setOpen} />
        </div>
        <Main />
      </div>
    </div>
  );
};

export default HomeLayout;
