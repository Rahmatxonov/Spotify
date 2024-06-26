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
      <NavLeft />
      <div className="main-content max-w-[970px] w-full">
        <Routes>
          <Route path="/" element={<Dashboard code={code} />} />
          <Route path="/single-up" element={<SinglePage code={code} />} />
          <Route path="/like" element={<LikePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <NavRight />
    </div>
  );
};

export default Index;
