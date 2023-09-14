import Work from "../../../assets/images/work.png"
const Launch = () => {
    return (
        <div className="flex justify-between items-center  mt-5 rounded-md p-5 bg-white">
            <div className="w-full">
                <h2 className="text-xl uppercase font-bold">Project Lounch</h2>
                <p className="text-base text-gray-500">The project is going to launch</p>
                <div className="space-y-3">
                    <h2 className="text-3xl text-[#6259ca] font-bold mt-5">145 Days</h2>
                    <p className="text-lg text-gray-500">12 Monday, Oct 2020</p>
                </div>
            </div>
            <div className="w-full" >
                <img className="object-cover h-52 mx-auto" src={Work} alt="" />
            </div>
        </div>
    )
}

export default Launch