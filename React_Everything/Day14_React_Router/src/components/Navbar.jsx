import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between mb-4 bg-gray-400 rounded p-4 m-2">
      <h1>Logo</h1>
      <div className=" flex items-center gap-10 justify-between">
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
      <button>Login</button>
    </nav>
  );
};

export default Navbar;
