import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-2">
      <div className="textstructure mt-40 px-20">
        {["We create", "eye Opening", "Presentations"].map((items, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex items-end overflow-hidden ">
                {index === 1 && (
                  <div className=" mr-1 rounded-md w-[9vw] h-[5vw] relative  bg-red-500"></div>
                )}
                <h1
                  className=" uppercase leading-none tracking-tighter 
                    font-semibold text-7xl"
                >
                  {items}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="border-t-[1px] border-zinc-700 mt-20 flex justify-between 
      items-center py-5 px-20"
      >
        {[
          "for public and private  companies",
          "from the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md  font-light tracking-light leading-none">
            {item}
          </p>
        ))}
        <div className="start">
          <div
            className="px-5 py-2 border-[1px] border-zinc-400 font-light 
          text-sm rounded-full  uppercase flex items-center gap-3"
          >
            Start the Project
            <div className="w-3 h-3 flex items-center justify-center rounded-full border-[1px] border-zinc-500">
              <span className="rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
