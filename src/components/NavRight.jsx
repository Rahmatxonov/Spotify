import React, { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import "./NavRight.css";

const NavRight = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="max-w-[346px] flex items-center justify-between mt-[30px]">
        <h3 className="text-[20px] font-bold leading-[25px] text-[#cccccc]">
          Friend Activity
        </h3>
        <span className="flex items-center space-x-2">
          <AiOutlineUserAdd className="text-[28px] text-gray-400" />
          {showMenu ? (
            <IoClose
              onClick={handleToggleMenu}
              className="text-[28px] text-gray-400 cursor-pointer"
            />
          ) : (
            <LuMenu
              onClick={handleToggleMenu}
              className="text-[28px] text-gray-400 cursor-pointer"
            />
          )}
        </span>
      </div>

      {showMenu && (
        <div className="text-[#cccccc]">
          <p className="pt-[39px] text-[18px] leading-[24px] font-normal">
            Let friends and followers on Spotify see what you’re listening to.
          </p>
          <div className="flex items-center space-x-4 mt-10">
            <span className="relative flex items-center justify-center w-[62px] h-[62px] bg-gray-500 rounded-[50%] ">
              <FaRegUser className="text-[25px] text-gray-300" />
              <span className="absolute w-[15px] h-[15px] bg-blue-700 rounded-[50%] top-1 right-0"></span>
            </span>
            <span>
              <h4>John Doe</h4>
              <p className="text-[14px]">Web Developer</p>
            </span>
          </div>
          <div className="flex items-center space-x-4 mt-10">
            <span className="relative flex items-center justify-center w-[62px] h-[62px] bg-gray-500 rounded-[50%]">
              <FaRegUser className="text-[25px] text-gray-300" />
              <span className="absolute w-[15px] h-[15px] bg-blue-700 rounded-[50%] top-1 right-0"></span>
            </span>
            <span>
              <h4>John Doe</h4>
              <p className="text-[14px]">Web Developer</p>
            </span>
          </div>
          <div className="flex items-center space-x-4 mt-10">
            <span className="relative flex items-center justify-center w-[62px] h-[62px] bg-gray-500 rounded-[50%]">
              <FaRegUser className="text-[25px] text-gray-300" />
              <span className="absolute w-[15px] h-[15px] bg-blue-700 rounded-[50%] top-1 right-0"></span>
            </span>
            <span>
              <h4>John Doe</h4>
              <p className="text-[14px]">Web Developer</p>
            </span>
          </div>
          <p className="pt-[20px] text-[18px] leading-[25px] font-normal">
            Go to Settings Social and enable “Share my listening activity on
            Spotify.’ You can turn this off at any time.
          </p>
          <button className="w-[233px] h-[62px] uppercase bg-white text-black rounded-[50px] mt-[23px] font-bold text-[18px] leading-[22px] tracking-[14%]">
            settings
          </button>
        </div>
      )}
    </>
  );
};

export default NavRight;
