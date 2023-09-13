import DetailsChart from "./DetailsChart";

const Chart = () => {
  return (
    <div className="bg-white p-5 rounded-md">
      <h2 className="text-xl uppercase font-bold">Project Budget</h2>
      <p className="text-xs text-gray-500">Previeus moth vs this month</p>
      <DetailsChart />
    </div>
  );
};

export default Chart;
