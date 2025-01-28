import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <div
      className="flex h-screen  flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.bg4})` }}
    >
      <div className="w-[75%]">
        <motion.p
          className="m-2  text-5xl font-extrabold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div>
            <span className="border-b-2 border-blue-500 pb-2 ">Learn</span>{" "}
            Anything
          </div>
        </motion.p>
        {/* Animated Subtitle */}
        <motion.p
          className="mt-10 bg-gradient-to-r from-[#64e33d] via-[#07e4f0] to-[#0651ff] bg-clip-text text-3xl font-[500] text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div>Get Access for Award Winning</div> Online Courses
        </motion.p>
      </div>

      {/* Animated Buttons */}
      <motion.div
        className="mt-8 w-[75%] space-x-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        {/* First Button */}
        <button className="h-10 rounded-md rounded-tl-3xl bg-gradient-to-r from-green-500  to-blue-500 px-6 text-white">
          <i className="bi bi-search mr-1"></i>
          Discover Courses
        </button>

        {/* Second Button */}
        <button className="shadow-3xl h-10 rounded-md rounded-tl-3xl px-6 font-semibold ">
          <i className="bi bi-chat-dots mr-1 font-semibold"></i>
          Talk to Us
        </button>
      </motion.div>
    </div>
  );
};

export default Banner2;
