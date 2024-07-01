// import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 gap-10 overflow-hidden flex whitespace-nowrap ">
        <h1
          
          className="text-[16vw] leading-none font-bold uppercase pt-1 pb-3 -mb-18"
        >
          Your Text Here
        </h1>

        {/* <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 5,
          }}
          className="text-[16vw] leading-none font-bold uppercase pt-1 pb-3 -mb-18"
        >
          Your Text Here
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 5,
          }}
          className="text-[16vw] leading-none font-bold uppercase pt-1 pb-3 -mb-18"
        >
          Your Text Here
        </motion.h1> */}
      </div>
    </div>
  );
}

export default Marquee;
