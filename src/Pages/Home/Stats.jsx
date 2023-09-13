import { AiOutlineDollarCircle } from "react-icons/ai";
import { GiHumanTarget } from "react-icons/gi";
import { ImStatsBars2 } from "react-icons/im";

const Stats = () => {
  return (
    <div className="my-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      <div className="bg-white rounded-md p-5">
        <h2 className="text-xl uppercase font-bold">Total Revenue</h2>
        <p className="text-xs text-gray-500">Previeus moth vs this month</p>
        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="text-2xl font-bold">$5,900.00</span>
            <p className="text-sm text-gray-500">
              <span className="text-green-500">55%</span> Higher
            </p>
          </div>
          <div className="rounded-full bg-blue-100 p-3">
            <ImStatsBars2 size={20} className="text-blue-500" />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-md p-5">
        <h2 className="text-xl uppercase font-bold">New Employess</h2>
        <p className="text-xs text-gray-500">Employees joined this month</p>
        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="text-2xl font-bold">15</span>
            <p className="text-sm text-gray-500">
              <span className="text-red-500">5%</span> Increased
            </p>
          </div>
          <div className="rounded-full bg-blue-100 p-3">
            <GiHumanTarget size={20} className="text-blue-500" />
          </div>
        </div>
      </div>
      <div className="sm:col-span-2 xl:col-span-1 bg-white rounded-md p-5">
        <h2 className="text-xl uppercase font-bold">Total Expenses</h2>
        <p className="text-xs text-gray-500">Previeus moth vs this month</p>
        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="text-2xl font-bold">$8,500.00</span>
            <p className="text-sm text-gray-500">
              <span className="text-green-500">12%</span> Decress
            </p>
          </div>
          <div className="rounded-full bg-blue-100 p-3">
            <AiOutlineDollarCircle size={20} className="text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
