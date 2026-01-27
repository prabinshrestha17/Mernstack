import React from "react";
import { NavLink } from "react-router-dom";
import "../../src/App.css";

const Navbar = () => {
  return (
    <div className="items">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/courses"}>Courses</NavLink>
    </div>
  );
};

export default Navbar;
