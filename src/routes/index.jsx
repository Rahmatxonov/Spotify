import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Dashboard,
  SinglePage,
  NotFound,
  LikePage,
  NavLeft,
  NavRight,
} from "../pages";

const Index = ({ code }) => {
  return (
    <div className="flex justify-between">
      <div className="max-w-[310px] w-full">
        <NavLeft />
      </div>
      <div className="main-content max-w-[1072px] w-full pe-10 ps-10">
        <Routes>
          <Route path="/" element={<Dashboard code={code} />} />
          <Route path="/single" element={<SinglePage />} />
          <Route path="/like" element={<LikePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className="max-w-[346px] w-full">
        <NavRight />
      </div>
    </div>
  );
};

export default Index;
