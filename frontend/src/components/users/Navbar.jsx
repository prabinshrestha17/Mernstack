import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  const [logedOut, setLogedOut] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogedOut = () => {
    localStorage.removeItem("token");
    setLogedOut(true);
    alert("You have been logged out");

    navigate("/login");
  };

  console.log(token);

  return (
    <div className="header">
      <h1>logo</h1>
      <nav className="navbar">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About us</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        <NavLink to={"/store"}>Store</NavLink>

        {token ? (
          <>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
            <button onClick={handleLogedOut}>Logout </button>
          </>
        ) : (
          <>
            <NavLink to={"/register"}>Register</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
          </>
        )}

        <NavLink to={"/forgot-password"}></NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
