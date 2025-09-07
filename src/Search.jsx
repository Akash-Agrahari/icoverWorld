import { useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";

function Search({ setOpen }) {

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }} // upar se start
      animate={{ y: 0, opacity: 1 }} // neeche aate hue fade
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ fontFamily: "Montserrat, bold" }}
      className="search-main mt-11 w-full h-screen flex justify-center backdrop-blur-3xl fixed z-[1] top-0 left-0"
    >
      <div className="bg-white py-10 w-full lg:h-1/2 h-screen flex relative flex-col justify-start items-center">
        <input
          type="text"
          placeholder="Search.."
          className="px-10 py-2 lg:w-1/2 w-80 rounded-full border-none bg-[#f5f5f7] outline-none focus:outline-none relative z-10"
        />

        <div className="w-full flex flex-col text-[#1d1d1f] items-start absolute lg:left-1/4 left-1/9 top-24">
          <h1 className="mt-4 text-lg font-medium">Recent searches.</h1>
          <div className="cursor-pointer flex flex-col items-start gap-1 mt-2">
            <p className="text-xl lg:hover:text-neutral-400 lg:transition-colors duration-200">
              iPhone 16 MagSafe.
            </p>
            <p className="text-xl lg:hover:text-neutral-400 lg:transition-colors duration-200">
              Apple 18w adapter.
            </p>
            <p className="text-xl lg:hover:text-neutral-400 lg:transition-colors duration-200">
              AirPods gen2.
            </p>
            <p className="text-xl lg:hover:text-neutral-400 lg:transition-colors duration-200">
              MagSafe wallet.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Search;
