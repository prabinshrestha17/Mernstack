import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainRoutes = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<>Hello from Home Page</>}></Route>
        <Route
          path="/about"
          element={<div>Hello from about section </div>}
        ></Route>
        <Route path="/courses" element={<>Courses section </>}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
