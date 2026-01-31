import React from "react";
import { NavLink } from "react-router-dom";
import "../../src/App.css";

const Navbar = () => {
  return (
    <div className="items">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/courses"}>Courses</NavLink>
      <NavLink to={"/usestate"}>Usestate</NavLink>
      <NavLink to={"/usestate2"}>Usestate2</NavLink>
    </div>
  );
};

export default Navbar;
