import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className=" w-full">
      <Outlet />
    </div>
  );
};

export default Main;
