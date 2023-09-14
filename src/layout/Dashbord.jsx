import { HiOutlineHome } from "react-icons/hi";
import { AiFillProfile } from "react-icons/ai";
import Logo from "../assets/images/logo-light.png"
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
// import { FiArrowRight } from "react-icons/fi";


const Dashbord = () => {
  const [hiddenText, setHiddenText] = useState(true)
  return <div className="w-[241px] bg-[#0e0e23]  min-h-screen overflow-y-auto" >
    <div className="flex items-center justify-center h-20 border-b-2 fixed  bg-[#0e0e23] w-[241px]">
      <img src={Logo} alt="" />
    </div>
    <div className="fixed h-screen w-[230px] mt-20 py-8 px-5">
      <h2 className="text-gray-400 uppercase font-semibold">Dashboard</h2>
      <div className="space-y-5 mt-5 ">
        <div className="bg-white flex justify-start items-center pl-1 py-1 rounded-s-full">
          <p className={`bg-[#5d5df3] rounded-full p-2 mr-2`} ><HiOutlineHome size={25} className="text-white " /></p>
          <p className="text-[#5d5df3]">Dashboard</p>
        </div>
      </div>
      <div className="mt-5 space-y-7">
        <div className="cursor-pointer group text-gray-500 hover:text-white text-base flex justify-between items-center gap-3">
          <AiFillProfile size={20} />
          <p className="group-hover:transform group-hover:transition-transform group-hover:translate-x-1 hover:scale-105">Crypto Currencies</p>
          <FiArrowRight size={24} className="text-gray-500 group-hover:text-white flex-1 pr-2" />
        </div>


      </div>
    </div>
  </div>;
};

export default Dashbord;
