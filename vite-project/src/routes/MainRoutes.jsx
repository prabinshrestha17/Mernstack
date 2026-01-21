import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../components/About";

const MainRoutes = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<div>Hello from home routes</div>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
