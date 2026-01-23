import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Courses from "../components/Courses";
import UseStatePractice from "../components/UseStatePractice";
import UsestatePractice2 from "../components/UsestatePractice2";
import Usestatepassword from "../components/Usestatepassword";

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
        <Route
          path="/usestate"
          element={<UseStatePractice></UseStatePractice>}
        ></Route>

        <Route path="/image" element={<UsestatePractice2 />}></Route>
        <Route path="/password" element={<Usestatepassword />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
