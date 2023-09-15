import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BsArrowDownShort, BsArrowUpShort, BsDot } from "react-icons/bs";

const Task = () => {
  return (
    <div className="flex md:flex-row flex-col gap-5 mt-5">
      <div className="bg-white rounded-md p-5 w-full">
        <div className="flex justify-between items-center sm:flex-row flex-col ">
          <div>
            <h2 className="text-xl uppercase font-bold">Project Budget</h2>
            <p className="text-xs text-gray-500">Previeus moth vs this month</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <span className="flex justify-center items-center text-blue-600 font-medium">
              <BsDot size={25} /> Project
            </span>
            <span className="flex justify-center items-center text-gray-500 font-semibold">
              <BsDot size={25} /> Inprogress
            </span>
          </div>
        </div>
        <div className="space-y-2 mt-5 flex justify-between items-center sm:flex-row flex-col">
          <div className="">
            <p>Project-Budget</p>
            <h2 className="font-bold text-2xl text-[#6054e0]">$5,240</h2>
            <p className="text-gray-400 font-medium text-sm">
              May 28 - June 01 (2018)
            </p>
          </div>
          <div
            style={{ width: 90, height: 90, stroke: "black", color: "black" }}
          >
            <CircularProgressbar value={50} text={`${70}%`} />;
          </div>
        </div>
      </div>

      <div className="flex bg-white rounded-md p-5 w-full ">
        <div>
          <h2 className="text-xl uppercase font-bold"> Top Inquiries</h2>
          <div className="mt-5 space-y-3 ">
            <div className="flex justify-between items-center">
              Brand Identity
              <div className="flex-1 flex justify-end items-center gap-1">
                <progress
                  className="progress progress-primary w-32 text-xs"
                  value={35}
                  max="50"
                ></progress>
                <span className="flex items-center">
                  <BsArrowUpShort className="text-green-500" />
                  24.03%
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              Product Design
              <div className="flex-1 flex justify-end items-center gap-1">
                <progress
                  className="progress progress-primary w-28 text-xs"
                  value={35}
                  max="50"
                ></progress>
                <span className="flex items-center">
                  <BsArrowDownShort className="text-red-500" /> 14.03%
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center gap-5 ">
              Ui & UX Design
              <div className="flex-1 flex justify-end items-center gap-1">
                <progress
                  className="progress progress-primary w-28 text-xs"
                  value={35}
                  max="50"
                ></progress>
                <span className="flex items-center">
                  <BsArrowUpShort className="text-green-500" />
                  24.03%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
