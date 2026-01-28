import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Shop from "../components/Shop";
import Navbar from "../components/Navbar";
import Register from "../components/Register";

const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
