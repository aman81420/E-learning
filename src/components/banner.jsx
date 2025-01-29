import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const Banner = () => {
  return (
    <div
      className=" h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.bg3})` }}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Animated Icon */}
        <motion.div
          className="mt-6 rounded-full bg-gradient-to-b from-orange-500 to-red-500 p-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <i className="bi bi-marker-tip text-5xl text-white"></i>
        </motion.div>

        {/* Animated Title */}
        <motion.p
          className="my-2 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-3xl font-bold text-transparent md:text-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Education Everywhere
        </motion.p>

        {/* Animated Subtitle */}
        <motion.p
          className="text-2xl font-[380] md:text-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Over 1900 Online Courses
        </motion.p>
      </div>

      {/* Animated Buttons */}
      <motion.div
        className="mt-6 flex items-center justify-center space-x-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        {/* First Button */}
        <button className="h-10 rounded-md rounded-tl-3xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 px-6 text-white">
          Learn Now
        </button>

        {/* Second Button */}
        <button className="h-10 rounded-md rounded-tl-3xl bg-gradient-to-r from-lime-400 via-green-500 to-blue-500 px-6 text-white">
          Explore E-Learny
        </button>
      </motion.div>
    </div>
  );
};

export default Banner;
