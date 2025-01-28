import React from "react";
import assets from "../assets/assets";

const Navbar = () => {
  return (
    <div>
      {/* Navbar container */}
      <div className="flex h-10 items-center justify-between border-b-[1px] border-black bg-[rgba(17,18,17,0.89)] px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <img
          className="h-5 hover:cursor-pointer"
          src={assets.whiteLogo}
          alt="Logo"
        />

        {/* Buy Now button */}
        <button className=" flex h-6 items-center rounded-sm border-x-[14px] border-y-4 border-[#82B440] bg-[#86b748] py-0 text-[10px] text-white hover:bg-[#74a03c] sm:text-xs lg:text-sm">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
