import React, { useState, useEffect } from "react";
import Page1 from "./banner";
import Page2 from "./Banner2";
import Page3 from "./Banner3";

const Main_banner = () => {
  const [currentPage, setCurrentPage] = useState(0); // Default to Page 1
  const [timer, setTimer] = useState(8); // Set the timer to 8 seconds initially

  // Array of pages to switch between
  const pages = [<Page1 />, <Page2 />, <Page3 />];

  // Switch pages automatically every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          setCurrentPage((prevPage) => (prevPage + 1) % pages.length); // Loop through pages
          return 8; // Reset the timer to 8 seconds after page change
        }
        return prevTimer - 1; // Decrement the timer
      });
    }, 1000); // Decrement timer every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Handle button clicks to change page manually and reset the timer
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
    setTimer(8); // Reset timer to 8 seconds when page changes manually
  };

  return (
    <div>
      <div>{pages[currentPage]}</div> {/* Render the current page */}
      <div className="mt-4 flex justify-center space-x-1 md:-translate-y-10">
        {/* Buttons to manually change page */}
        <button
          onClick={() => handlePageChange(0)}
          className="h-3 w-3 rounded-full border-2 border-gray-500 hover:bg-gray-600"
        ></button>
        <button
          onClick={() => handlePageChange(1)}
          className="h-3 w-3 rounded-full border-2 border-gray-500 hover:bg-gray-600"
        ></button>
        <button
          onClick={() => handlePageChange(2)}
          className="h-3 w-3 rounded-full border-2 border-gray-500 hover:bg-gray-600"
        ></button>
      </div>
      <div className="mt-4 text-center text-white">
        {/* Display timer for demonstration */}
        <p>Timer: {timer}s</p>
      </div>
    </div>
  );
};

export default Main_banner;
