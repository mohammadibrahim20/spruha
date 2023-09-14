
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ProjectLogo from "../../../assets/images/project-logo.png"

const WebsiteDesign = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: "Jan",
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className="bg-white rounded-md p-5 mt-5">
            <div className="flex justify-between">
                <div>
                    <h2 className="text-xl uppercase font-bold">Website Design</h2>
                    <p className="text-base text-gray-500 mt-2">Task Completed : 7/10</p>
                </div>
                <p className="text-base text-gray-500 mt-2">Running</p>
            </div>

            <div className='w-full h-40'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={250}
                        data={data}
                        margin={{
                            top: 10,
                            right: 20,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={8}
                    >
                        {/* <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} /> */}
                        {/* <YAxis /> */}
                        <Tooltip />
                        {/* <Legend /> */}
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <Bar dataKey="pv" fill="#6259ca" background={{ fill: '#eee' }} />
                    </BarChart>

                </ResponsiveContainer>
            </div>

            <div className='flex justify-between items-center'>
                <div>
                    <p className="text-xl text-gray-500 mt-2">Client : <span className='text-black'>Jhon Doe</span></p>
                    <p className="text-base text-gray-500 mt-2">Deadline : 25 Dec 2022</p>
                </div>
                <div >
                    <img className='h-16' src={ProjectLogo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default WebsiteDesign