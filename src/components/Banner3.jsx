import React, { useState } from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const Banner3 = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Categories");

  const [isInstructorOpen, setIsInstructorOpen] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState("Instructor");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Update selected category
    setIsCategoriesOpen(false); // Close dropdown after selection
  };

  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor); // Update selected instructor
    setIsInstructorOpen(false); // Close dropdown after selection
  };

  return (
    <div
      className="flex h-screen items-center justify-around bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.bg5})` }}
    >
      {/* ---------------------------- Left side ---------------------------------- */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="text-5xl font-extrabold text-white">
          <span className="border-b-4 border-[#23b038] pb-2 ">Enroll</span> Now
          & Learn
        </p>

        <motion.p
          className="mt-10 text-3xl text-white"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div>Get Access for Award Winning</div> Online Courses
        </motion.p>
      </motion.div>

      {/* ---------------------------- Right side ------------------------------------ */}
      <motion.div
        className="flex flex-col space-y-4"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <button className="flex h-10 w-72 items-center justify-start rounded-md rounded-tl-3xl bg-white px-6 text-sm font-semibold text-gray-800">
          Keywords
        </button>

        {/* Categories Button with Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            className="flex h-10 w-72 items-center justify-between rounded-md rounded-tl-3xl bg-white px-6 text-sm font-semibold text-gray-800"
          >
            {selectedCategory}
            <i className="bi bi-caret-down-fill text-gray-800"></i>
          </button>
          {isCategoriesOpen && (
            <div className="absolute left-0 z-10 mt-2 w-72 rounded-md bg-white shadow-lg">
              <ul>
                <li
                  className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => handleCategorySelect("Category 1")}
                >
                  Category 1
                </li>
                <li
                  className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => handleCategorySelect("Category 2")}
                >
                  Category 2
                </li>
                <li
                  className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => handleCategorySelect("Category 3")}
                >
                  Category 3
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Instructor Button with Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsInstructorOpen(!isInstructorOpen)}
            className="flex h-10 w-72 items-center justify-between rounded-md rounded-tl-3xl bg-white px-6 text-sm font-semibold text-gray-800"
          >
            {selectedInstructor}
            <i className="bi bi-caret-down-fill text-gray-800"></i>
          </button>
          {isInstructorOpen && (
            <div className="absolute left-0 z-10 mt-2 w-72 rounded-md bg-white shadow-lg">
              <ul>
                <li
                  className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => handleInstructorSelect("Instructor 1")}
                >
                  Instructor 1
                </li>
                <li
                  className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => handleInstructorSelect("Instructor 2")}
                >
                  Instructor 2
                </li>
                <li
                  className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => handleInstructorSelect("Instructor 3")}
                >
                  Instructor 3
                </li>
              </ul>
            </div>
          )}
        </div>

        <button className="flex h-10 items-center justify-start rounded-md rounded-tl-3xl bg-yellow-600 px-6 text-sm font-semibold text-gray-800">
          Search Courses
        </button>
      </motion.div>
    </div>
  );
};

export default Banner3;
