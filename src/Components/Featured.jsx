import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl tracking-tight">Featured Projects</h1>
      </div>
      <div className="px-10">
        <div className="cards flex gap-10 mt-10">
          <div className="cardcontainer relative w-1/2 h-[70vh]">
            <h1 className="absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2  font-semibold leading-none tracking-tighter text-6xl">
            {"FYDE".split('').map((item, index)=><span className="">{item}</span>)}
            </h1>
            <div className="card w-full h-full rounded-lg overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="/design.png"
                alt="Background"
              />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[70vh]">
            <h1 className="absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  font-semibold leading-none tracking-tighter text-6xl">
              {"VISE".split('').map((item, index)=><span className="">{item}</span>)}
            </h1>
            <div className="card w-full h-full rounded-lg overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="/design2.webp"
                alt="Background"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
