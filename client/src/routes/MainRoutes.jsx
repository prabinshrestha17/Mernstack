import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Usestatepractie from "../components/Usestatepractie";
import Usestate2 from "../components/Usestate2";
import "../../src/App.css";

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
        <Route path="/usestate" element={<Usestatepractie />}></Route>
        <Route path="/usestate2" element={<Usestate2 />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
