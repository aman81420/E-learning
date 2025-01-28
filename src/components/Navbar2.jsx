import React from "react";
import { NavLink } from "react-router-dom";
import assets from "../assets/assets";

const Navbar2 = () => {
  return (
    <div className="h-auto bg-[rgba(17,18,17,0.91)]">
      {/* Top bar section */}
      <div className="flex h-7 justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-5xl items-center justify-between border-b-[.1px] border-[#ffffff36]">
          {/* Icons on the left side */}
          <div className="flex space-x-2">
            <i className="bi bi-google text-[#ffffff5e] hover:cursor-pointer hover:text-[#21ea2ff6]"></i>
            <i className="bi bi-facebook text-[#ffffff5e] hover:cursor-pointer hover:text-[#21ea2ff6]"></i>
            <i className="bi bi-twitter text-[#ffffff5e] hover:cursor-pointer hover:text-[#21ea2ff6]"></i>
            <i className="bi bi-youtube text-[#ffffff5e] hover:cursor-pointer hover:text-[#21ea2ff6]"></i>
          </div>

          {/* Login and Register links */}
          <div className="flex items-center space-x-1">
            <i className="bi bi-person-fill-lock text-[#ffffff5e] hover:cursor-pointer hover:text-[#21ea2ff6]"></i>
            <p className="text-xs text-gray-500 hover:cursor-pointer hover:text-[#21ea2ff6]">
              Login
            </p>
            <i className="bi bi-person-fill-x  text-[#ffffff5e] hover:cursor-pointer hover:text-[#21ea2ff6]"></i>
            <p className="text-xs text-gray-500 hover:cursor-pointer hover:text-[#21ea2ff6]">
              Register
            </p>
          </div>
        </div>
      </div>

      {/* Navbar section */}
      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 w-full max-w-5xl items-center justify-between">
          {/* Logo */}
          <img
            className="h-5 hover:cursor-pointer sm:h-7"
            src={assets.whiteLogo}
            alt="Logo"
          />

          {/* Navigation links */}
          <div className="hidden md:flex">
            <ul className="flex space-x-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Students", path: "/students" },
                { name: "Why Us", path: "/why-us" },
                { name: "Courses", path: "/courses" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-sm font-semibold hover:cursor-pointer ${
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
          <div className="flex h-8 w-28 items-center rounded-md rounded-tl-3xl border-[1px] border-[#ffffff36] px-2">
            <i className="bi bi-search mx-2 text-xs text-white hover:cursor-pointer"></i>
            <p className="text-xs text-white">Search</p>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="block bg-gray-800 md:hidden">
        <ul className="flex flex-col items-center space-y-2 py-4">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Students", path: "/students" },
            { name: "Why Us", path: "/why-us" },
            { name: "Courses", path: "/courses" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-semibold hover:cursor-pointer ${
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
    </div>
  );
};

export default Navbar2;
