import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { IoSearch, IoLibraryOutline, IoClose } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import "./NavLeft.css";

const NavLeft = () => {
  const [show, setShow] = useState(true);

  const toggleNavLeft = () => {
    setShow(!show);
  };

  return (
    <div className="navLeft">
      {show ? (
        <>
          <ul className="mt-[70px] space-y-[20px] whitespace-nowrap">
            <li>
              <span className="flex items-center justify-between">
                <NavLink
                  to={"/"}
                  className="flex items-center gap-x-[20px] text-gray-400 font-bold text-[18px] leading-[22px]"
                >
                  <GoHomeFill className="text-[28px]" />
                  Home
                </NavLink>
                <IoClose
                  onClick={toggleNavLeft}
                  className="close text-white text-[28px] cursor-pointer"
                />
              </span>
            </li>
            <li>
              <NavLink
                to={"/search"}
                className="flex items-center gap-x-[20px] text-gray-400 font-bold text-[18px] leading-[22px]"
              >
                <IoSearch className="text-[28px]" />
                Search
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/library"}
                className="flex items-center gap-x-[20px] text-gray-400 font-bold text-[18px] leading-[22px]"
              >
                <IoLibraryOutline className="text-[28px]" />
                Your Library
              </NavLink>
            </li>
            <span className="space-y-[20px]">
              <li>
                <NavLink
                  to={"/playlist"}
                  className="flex items-center gap-x-[20px] text-gray-400 font-bold text-[18px] leading-[22px] mt-[50px]"
                >
                  <span className="add rounded-md">
                    <IoMdAdd className="text-[18px] text-black" />
                  </span>
                  Create Playlist
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/likes"}
                  className="flex items-center gap-x-[20px] text-gray-400 font-bold text-[18px] leading-[22px]"
                >
                  <span className="heart rounded-md">
                    <FaRegHeart className="text-[14px] text-white" />
                  </span>
                  Liked Songs
                </NavLink>
              </li>
            </span>
            <hr />
            <ul className="text-gray-400 space-y-[18px]">
              <li className="text-[18px] leading-[22px]">Chill Mix</li>
              <li className="text-[18px] leading-[22px]">Insta Hits</li>
              <li className="text-[18px] leading-[22px]">
                Your Top Songs 2021
              </li>
              <li className="text-[18px] leading-[22px]">Mellow Songs</li>
              <li className="text-[18px] leading-[22px]">
                Anime Lofi & Chillhop Music
              </li>
              <li className="text-[18px] leading-[22px]">
                BG Afro “Select” Vibes
              </li>
              <li className="text-[18px] leading-[22px]">
                Afro “Select” Vibes
              </li>
              <li className="text-[18px] leading-[22px]">Happy Hits!</li>
              <li className="text-[18px] leading-[22px]">Instrumental Study</li>
              <li className="text-[18px] leading-[22px]">OST Compilations</li>
              <li className="text-[18px] leading-[22px]">
                Nostalgia for old souled mill...
              </li>
              <li className="text-[18px] leading-[22px]">Mixed Feelings</li>
            </ul>
          </ul>
        </>
      ) : (
        <LuMenu
          onClick={toggleNavLeft}
          className="menu text-white text-[28px] cursor-pointer"
        />
      )}
    </div>
  );
};

export default NavLeft;
