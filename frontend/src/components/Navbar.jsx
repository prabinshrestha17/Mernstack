import React from "react";
import { NavLink } from "react-router-dom";
import "../../src/App.css";

const Navbar = () => {
  return (
    <div className="header">
      <h1>logo</h1>
      <nav className="navbar">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About us</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        <NavLink to={"/shop"}>Shop</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
