import { AiFillProfile, AiOutlineCreditCard, AiOutlineLayout } from "react-icons/ai";
import { HiOutlineHome, HiOutlineShoppingCart } from "react-icons/hi";
import { PiFileLockBold } from "react-icons/pi";

import { FiArrowRight } from "react-icons/fi";
// import { FiArrowRight } from "react-icons/fi";

const Dashbord = ({ open, setOpen }) => {


  return (
    <div
      onMouseEnter={() => setOpen(true)}
      className={`${
        open ? "w-[241px]" : "w-18"
      }  min-h-screen overflow-y-auto z-50 transition-width duration-500 ease-in-out ` }
    >
      <div
        className={`fixed h-screen ${
          open ? "w-[241px]" : "w-20"
        } mt-16 md:mt-20 py-8 bg-[#0e0e23] transition-width duration-500 ease-in-out`}
      >
        <div className="pl-5">
          {open && (
            <h2 className={`text-gray-400 uppercase font-semibold text-xs `}>
              Dashboard
            </h2>
          )}
          <div className="space-y-5 md:mt-5 rounded-e-3xl">
            <div className="bg-white flex justify-start items-center pl-1 py-1 rounded-s-full cursor-pointer">
              <p className={`bg-[#5d5df3] rounded-full p-2 mr-2`}>
                <HiOutlineHome size={25} className="text-white " />
              </p>
              {open && <p className={`text-[#5d5df3]`}>Dashboard</p>}
            </div>
          </div>

          <ul
            className={`space-y-8 mt-8 ${
              open && "flex items-center justify-between flex-col"
            } w-full pl-5 pr-2`}
          >
            <li className="w-[225px]">
              <div className="cursor-pointer group text-gray-500 hover:text-white text-base flex justify-between items-center gap-3 w-[225px]">
                <AiFillProfile
                  className={`${!open && "scale-125"}`}
                  size={20}
                />
                {open && (
                  <>
                    <p
                      className={`group-hover:transform group-hover:transition-transform group-hover:translate-x-1 hover:scale-105 `}
                    >
                      Crypto Currencies
                    </p>
                    <FiArrowRight
                      size={20}
                      className={`text-gray-500 group-hover:text-white flex-1 pr-2 `}
                    />
                  </>
                )}
              </div>
            </li>
            <li className="w-[225px]">
              <div className="cursor-pointer group text-gray-500 hover:text-white text-base flex justify-between items-center gap-3 w-[225px]">
                <AiOutlineCreditCard size={20} />
                {open && (
                  <>
                    <p
                      className={`group-hover:transform group-hover:transition-transform group-hover:translate-x-1 hover:scale-105 `}
                    >
                      Crypto Currencies
                    </p>
                    <FiArrowRight
                      size={20}
                      className={`text-gray-500 group-hover:text-white flex-1 pr-2 `}
                    />
                  </>
                )}
              </div>
            </li>
            <li className="w-[225px]">
              <div className="cursor-pointer group text-gray-500 hover:text-white text-base flex justify-between items-center gap-5 ">
                <HiOutlineShoppingCart
                  size={20}
                  className={`${!open && "scale-125"}`}
                />
                {open && (
                  <>
                    <p
                      className={`group-hover:transform group-hover:transition-transform group-hover:translate-x-1 hover:scale-105 flex-1 `}
                    >
                      Ecommerce
                    </p>
                    <FiArrowRight
                      size={20}
                      className={`text-gray-500 group-hover:text-white flex-1 pr-2 `}
                    />
                  </>
                )}
              </div>
            </li>
          </ul>
          {open && (
            <h2 className={`text-gray-400 text-xs uppercase font-semibold mt-5 `}>
              Landing
            </h2>
          )}
          <ul
            className={`space-y-8 mt-8 ${
              open && "flex items-center justify-between flex-col"
            } w-full pl-5 pr-2`}
          >
            <li className="w-[225px]">
              <div className="cursor-pointer group text-gray-500 hover:text-white text-base flex justify-between items-center gap-3 w-[225px]">
                <AiOutlineLayout
                  className={`${!open && "scale-125"}`}
                  size={20}
                />
                {open && (
                  <>
                    <p
                      className={`group-hover:transform group-hover:transition-transform group-hover:translate-x-1 hover:scale-105 `}
                    >
                      Landing Page
                    </p>
                    <FiArrowRight
                      size={20}
                      className={`text-gray-500 group-hover:text-white flex-1 pr-2 `}
                    />
                  </>
                )}
              </div>
            </li>
           
          </ul>
          {open && (
            <h2 className={`text-gray-400 text-xs uppercase font-semibold mt-5 `}>
              Application
            </h2>
          )}
          <ul
            className={`space-y-8 mt-8 ${
              open && "flex items-center justify-between flex-col"
            } w-full pl-5 pr-2`}
          >
            <li className="w-[225px]">
              <div className="cursor-pointer group text-gray-500 hover:text-white text-base flex justify-between items-center gap-3 w-[225px]">
                <PiFileLockBold
                  className={`${!open && "scale-125"}`}
                  size={20}
                />
                {open && (
                  <>
                    <p
                      className={`group-hover:transform group-hover:transition-transform group-hover:translate-x-1 hover:scale-105 `}
                    >
                      Apps
                    </p>
                    <FiArrowRight
                      size={20}
                      className={`text-gray-500 group-hover:text-white flex-1 pr-2 `}
                    />
                  </>
                )}
              </div>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
