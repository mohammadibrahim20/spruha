import { CiFilter } from "react-icons/ci";
import { FiDownloadCloud } from "react-icons/fi";
import { GoDownload } from "react-icons/go";

const Welcome = () => {
  return (
    <div className="flex justify-between items-center md:flex-row flex-col gap-5 px-5 pt-5">
      <div className="text-sm breadcrumbs">
        <h2 className="text-2xl text-[#170c6b] font-semibold">
          Welcome to Dahsboard
        </h2>
        <ul className="text-gray-500 text-xs">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Project Dashboard</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex items-center justify-center gap-3">
          <button className="flex justify-center items-center gap-2 bg-white hover:bg-gray-100  hover:border-white hover:border-2 rounded-sm px-4 py-2 text-sm transform transition-transform">
            <GoDownload />
            Import
          </button>
          <button className="flex justify-center items-center gap-2 bg-white hover:bg-gray-100 hover:border-white hover:border-2 rounded-sm px-4 py-2 text-sm transform transition-transform">
            <CiFilter />
            Import
          </button>
        </div>
        <button className="flex justify-center items-center gap-2 bg-blue-700 text-white hover:bg-blue-900 rounded-sm px-4 py-2 text-sm transform transition-transform">
          <FiDownloadCloud />
          Download Repor
        </button>
      </div>
    </div>
  );
};

export default Welcome;
