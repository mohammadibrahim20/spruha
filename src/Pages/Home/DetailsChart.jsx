import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const DetailsChart = () => {
  const data = [
    {
      name: "January",
      "Total-Budget": 4000,
      "Amount-Used": 2400,
      amt: 2400,
    },
    {
      name: "February",
      "Total-Budget": 3000,
      "Amount-Used": 1398,
      amt: 2210,
    },
    {
      name: "March",
      "Total-Budget": 2000,
      "Amount-Used": 9800,
      amt: 2290,
    },
    {
      name: "April",
      "Total-Budget": 2780,
      "Amount-Used": 3908,
      amt: 2000,
    },
    {
      name: "May",
      "Total-Budget": 1890,
      "Amount-Used": 4800,
      amt: 2181,
    },
    {
      name: "June",
      "Total-Budget": 2390,
      "Amount-Used": 3800,
      amt: 2500,
    },
    {
      name: "July",
      "Total-Budget": 3490,
      "Amount-Used": 4300,
      amt: 2100,
    },
    {
      name: "August",
      "Total-Budget": 3490,
      "Amount-Used": 4300,
      amt: 2100,
    },
    {
      name: "September",
      "Total-Budget": 3490,
      "Amount-Used": 4300,
      amt: 2100,
    },
    {
      name: "October",
      "Total-Budget": 3490,
      "Amount-Used": 4300,
      amt: 2100,
    },
    {
      name: "November",
      "Total-Budget": 3490,
      "Amount-Used": 4300,
      amt: 2100,
    },
    {
      name: "December",
      "Total-Budget": 9490,
      "Amount-Used": 8500,
      amt: 2100,
    },
  ];
  return (
    <div className='h-64 mt-5 '>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Amount-Used"
            stroke="#9088e4"
            activeDot={{ r: 10 }}
            strokeDasharray="3 4 4 2"
          />
          <Line type="monotone" dataKey="Total-Budget" stroke="#6259ca" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DetailsChart;
