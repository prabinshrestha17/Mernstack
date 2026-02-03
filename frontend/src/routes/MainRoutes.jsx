import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Shop from "../components/Shop";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import ForgotPassword from "../components/ForgotPassword";
import ResetPassword from "../components/ResetPassword";

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
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route
            path="/user/reset-password"
            element={<ResetPassword />}
          ></Route>

          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
