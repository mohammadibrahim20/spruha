import Work from "../../assets/images/work3.png";

const HomeBanner = () => {
  return (
    <div className="rounded-md  flex flex-col md:flex-row justify-between items-center m- bg-[#6259ca] mt-5 md:relative ">
      <img className="md:absolute bottom-0 h-[160px] " src={Work} alt="" />

      <div className="bg-[#6259ca] w-full h-5/6 md:h-[135px] my-5 md:my-0 rounded-md">
        <div className="md:ml-[320px] mx-10 md:mx-0">
          <h3 className="text-white text-xl md:text-3xl md:mt-6 ">
            Soniya Taylor!
          </h3>
          <p className="text-white text-xs">
            You have two projects to finish, you had completed{" "}
            <span className="text-md text-red-400 font-bold">57%</span> from
            your montly level, Keep going to your level{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
