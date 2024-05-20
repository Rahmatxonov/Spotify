import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SinglePage.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import icons from "../assets/images/icons.png";
import List from "../components/List";

const SinglePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item, code } = location.state || {};
  const [title, setTitle] = useState("");

  return (
    <div className="Single">
      <div className="flex items-center space-x-[22px] p-5">
        <span className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-blue-950">
          <MdKeyboardArrowLeft
            onClick={() => navigate(-1)}
            className="text-white text-[38px]"
          />
        </span>
        <span className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-blue-950">
          <MdKeyboardArrowRight
            onClick={() => navigate(+1)}
            className="text-white text-[38px]"
          />
        </span>
      </div>
      <div className="max-w-[970px] w-full flex items-center space-x-[32px] p-5">
        <img
          className="max-w-[297px] w-full h-[297px]"
          src={item.img}
          alt="image"
        />
        <div className="text-[#fffffff0]">
          <p className="font-medium uppercase text-[16px] leading-[20px]">
            {item.type}
          </p>
          <p className="font-black text-[50px]">{item.name}</p>
          <p>{item.uri.name}</p>
          <p className="pt-2">{item.release_date}</p>
        </div>
      </div>
      <span className="flex items-center justify-between p-5">
        <img width={200} height={100} src={icons} alt="icons" />
        <div className="input-wrapper">
          <button className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="25px"
              width="25px"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="1.5"
                stroke="#fff"
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              ></path>
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="1.5"
                stroke="#fff"
                d="M22 22L20 20"
              ></path>
            </svg>
          </button>
          <input
            placeholder="search.."
            className="input"
            name="text"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </span>
      <span className="text-white flex items-center justify-between p-5">
        <p className="font-normal text-[16px] leading-[20px] text-[#B3B3B3]">
          <b className="me-5">#</b>TITLE
        </p>
        <p className="font-normal text-[16px] leading-[20px] text-[#B3B3B3]">
          ALBUM
        </p>
        <p className="font-normal text-[16px] leading-[20px] text-[#B3B3B3]">
          DATE ADDED
        </p>
        <FaRegClock className="text-[#B3B3B3] text-[22px]" />
      </span>
      <hr />
      {/* <List /> */}
    </div>
  );
};

export default SinglePage;
