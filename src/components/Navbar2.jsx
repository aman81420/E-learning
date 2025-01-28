import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/assets";

const Navbar2 = () => {
  return (
    <div className="h-19 bg-[rgba(17,18,17,0.91)]">
      {/* Top bar section */}
      <div className="flex h-7 justify-center">
        <div className="flex w-[65%] items-center justify-between border-b-[.1px] border-[#ffffff36]">
          {/* Icons on the left side */}
          <div>
            <i className="fa-duotone fa-solid fa-g mx-1 text-[#ffffff36] hover:cursor-pointer hover:text-[#21ea2ff6]"></i>
            <i className="fa-duotone fa-solid fa-g mx-1 text-[#ffffff36] hover:cursor-pointer hover:text-[#21ea2ff6]"></i>
            <i className="fa-duotone fa-solid fa-g mx-1 text-[#ffffff36] hover:cursor-pointer hover:text-[#21ea2ff6]"></i>
            <i className="fa-duotone fa-solid fa-g mx-1 text-[#ffffff36] hover:cursor-pointer hover:text-[#21ea2ff6]"></i>
          </div>

          {/* Login and Register links */}
          <div className="flex">
            <p className="mx-2 text-xs text-gray-500 hover:cursor-pointer hover:text-[#21ea2ff6]">
              Login
            </p>
            <p className="text-xs text-gray-500 hover:cursor-pointer hover:text-[#21ea2ff6]">
              Register
            </p>
          </div>
        </div>
      </div>

      {/* Navbar section */}
      <div className="flex justify-center">
        <div className="flex h-12 w-[65%] items-center justify-between">
          {/* Logo */}
          <img className="h-5 hover:cursor-pointer" src={logo} alt="Logo" />

          {/* Navigation links */}
          <div className="flex items-center">
            <ul className="mx-14 flex items-center">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Students", path: "/students" },
                { name: "Why Us", path: "/why-us" },
                { name: "Courses", path: "/courses" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name} className="mx-2">
                  {/* NavLink for routing with active and hover styles */}
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-xs font-semibold hover:cursor-pointer ${
                        isActive
                          ? "text-[#21ea2ff6]" // Active link color
                          : "text-white hover:text-[#21ea2ff6]" // Default and hover color
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Search button */}
          <div className="flex h-7 w-28 items-center rounded-md rounded-tl-3xl border-[1px] border-[#ffffff36] px-2">
            <i className="fa-solid fa-magnifying-glass mx-2 text-xs text-white hover:cursor-pointer"></i>
            <p className="text-xs text-white">Search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
