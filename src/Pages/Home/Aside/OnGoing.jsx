import { CircularProgressbar } from 'react-circular-progressbar'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

const OnGoing = () => {
    return (
        <div className='mt-5 rounded-md p-5 bg-white'>
            <div>
                <h2 className="text-xl uppercase font-bold">On Going Project </h2>
                <p className="text-base text-gray-500">Project where development work is on completion</p>
            </div>
            <div className='p-3'>
                <div className='bg-[#f0f1f6] rounded-xl p-5 mt-5'>
                    <div className='flex justify-between items-center gap-2'>
                        <div className="avatar-group -space-x-2">
                            <div className="avatar">
                                <div className="w-7">
                                    <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-7">
                                    <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />{" "}
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-7">
                                    <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />{" "}
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-7">
                                    <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />{" "}
                                </div>
                            </div>
                        </div>
                        <h2 className='font-semibold text-xl flex-1'>Design Team</h2>
                        <HiOutlineDotsHorizontal className='' />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='mt-7 space-y-3'>
                            <p className='text-[#6259ca] text-sm'>25 August 2022</p>
                            <h3 className='text-xl font-bold text-gray-500'>Mobile App Design</h3>
                        </div>
                        <div
                            style={{ width: 50, height: 50, stroke: "black", color: "black" }}
                        >
                            <CircularProgressbar value={50}  />;
                        </div>
                    </div>
                </div>
                <div className='bg-[#f0f1f6] rounded-xl p-5 mt-5'>
                    <div className='flex justify-between items-center gap-2'>
                        <div className="avatar-group -space-x-2">
                            <div className="avatar">
                                <div className="w-7">
                                    <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-7">
                                    <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />{" "}
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-7">
                                    <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />{" "}
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-7">
                                    <img src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" />{" "}
                                </div>
                            </div>
                        </div>
                        <h2 className='font-semibold text-xl flex-1'>Design Team</h2>
                        <HiOutlineDotsHorizontal className='' />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='mt-7 space-y-3'>
                            <p className='text-[#6259ca] text-sm'>25 August 2022</p>
                            <h3 className='text-xl font-bold text-gray-500'>Website Design</h3>
                        </div>
                        <div
                            style={{ width: 50, height: 50, stroke: "black", color: "black" }}
                        >
                            <CircularProgressbar value={50}  />;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnGoing