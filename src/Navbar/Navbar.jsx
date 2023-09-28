import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Navbar = () => {
  return (
    <div className="flex py-5 ">
      <div className="flex justify-start text-2xl font-bold ">
        <h1>TECH</h1>
      </div>
      <div className="text-white  flex-grow justify-center space-x-20  ">
        <ul className="space-x-10 flex justify-center">
          <li className=" hover:text-gray-400 ">Solutions</li>
          <li className=" hover:text-gray-400 ">Services</li>
          <li className=" hover:text-gray-400 ">About</li>
          <li className=" hover:text-gray-400 ">Culture</li>
        </ul>
      </div>
      <div className="md:flex items-center space-x-2  justify-end mr-4 ">
        <button className="w-28 h-10 text-base p-1 hover:bg-blue-700 bg-gray-800 py-2 px-2 text-white rounded-3xl ">
          Contact Us
        </button>
        <button className="w-12 h-9 p-1 bg-gray-600 rounded-3xl ml-0 ">
          <ArrowForwardIcon className="text-white  " />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
