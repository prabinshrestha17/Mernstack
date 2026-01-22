import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Courses from "../components/Courses";

const MainRoutes = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<div>Hello from home routes</div>}></Route>
        <Route
          path="/about"
          element={<About productName="Lenovo " price="90,000"></About>}
        ></Route>
        <Route path="/courses" element={<Courses></Courses>}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
