import React from "react";
import FaceTracking from "./FaceTracking";
import Progress from "./ProgressBar";
import Questions from "./Questions";
import Subtitles from "./Subtitles";

const Mock = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-100 to-blue-50 flex flex-col p-5">
      {/* Header Section */}
      <div className="header flex justify-center items-center h-[12%] w-full bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg rounded-xl text-white">
        <h1 className="text-4xl font-extrabold tracking-wide">Interview Prep Pro</h1>
      </div>

      {/* Main Content Section */}
      <div className="center flex flex-col md:flex-row justify-evenly items-center h-[88%] w-full gap-6 p-5">
        {/* Left Section */}
        <div className="left h-full w-full md:w-[40%] bg-white rounded-xl shadow-lg p-5 flex flex-col gap-5">
          <div className="camera flex justify-center items-center flex-col h-[50%] w-full border-2 border-dashed border-blue-500 rounded-xl relative overflow-hidden">
            <FaceTracking/>
          </div>

          <div className="subtitle bg-gray-100 flex justify-center items-center h-[40%] w-full border-2 border-gray-300 rounded-xl p-5 overflow-y-auto">
            <Subtitles />
          </div>
        </div>

        {/* Right Section */}
        <div className="right h-full w-full md:w-[60%] bg-white rounded-xl shadow-lg p-5 flex flex-col gap-5">
          <Questions />
        </div>
      </div>
    </div>
  );
};

export default Mock;
