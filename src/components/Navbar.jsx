import React from "react";
import logo from "../assets/assets";

const Navbar = () => {
  return (
    <div>
      <div className="flex h-10 items-center justify-between border-b-[1px] border-black bg-[rgba(17,18,17,0.89)]">
        <img
          className="mx-6 h-7 hover:cursor-pointer"
          src={logo}
          alt="Logo"
        ></img>
        <button className=" mx-4 h-6 rounded-sm border-x-[14px] border-y-4  border-[#82B440] bg-[#86b748]  py-0 text-[10px]  text-white">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
