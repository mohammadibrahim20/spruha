import { BiMessage } from "react-icons/bi";
import { BsBell, BsFullscreen } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiMenuFoldLine } from "react-icons/ri";

const RightNav = () => {
  return (
    <div className="flex gap-8 md:gap-5 justify-center md:justify-center items-center py-5 md:py-2 bg-white">
      <MdOutlineDarkMode size={20} />
      <div className="avatar">
        <div className="w-8 rounded-full">
          <img src="https://www.pngitem.com/pimgs/m/144-1449707_bangladesh-flag-png-bangladesh-national-flag-transparent-png.png" />
        </div>
      </div>

      <BsFullscreen size={20} />
      <div className="indicator">
        <span className="indicator-item text-[10px] p-2 badge bg-red-500 text-white">
          4
        </span>
        <BsBell size={20} />
      </div>
      <div className="indicator">
        <span className="indicator-item text-[10px] p-2 badge bg-green-500 text-white">
          4
        </span>
        <BiMessage size={20} />
      </div>
      <div className="avatar">
        <div className="w-10 rounded-full">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fHww&w=1000&q=80" />
        </div>
      </div>
      <RiMenuFoldLine size={20} />
    </div>
  );
};

export default RightNav;
