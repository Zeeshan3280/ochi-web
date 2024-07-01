import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-normal text-3xl leading-[3vw]">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters.
      </h1>
      <div className="w-full border-t-[1px] pt-10 mt-20 border-[#9aaf4c] flex gap-5">
        <div className="w-1/2 ">
          <h1 className="text-5xl font-semibold">Our approach</h1>
          <button className="px-8 py-3 mt-6 bg-zinc-900 rounded-full text-white flex gap-10 items-center uppercase">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] bg-[#bbd267] rounded-3xl"></div>
      </div>
    </div>
  );
}

export default About;
