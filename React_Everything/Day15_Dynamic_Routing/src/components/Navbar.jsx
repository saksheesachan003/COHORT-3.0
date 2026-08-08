import React, { useContext } from "react";
import { NavLink } from "react-router";

const Navbar = () => {

  return (
    <div className="bg-black rounded p-5 flex justify-between items-center text-white">
      <div>Logo</div>
      <div className="flex gap-10 text-xl">
        {/* <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Products</p> */}

        <NavLink to={'/'}> Home </NavLink>
        <NavLink to={'/about'}> About </NavLink>
        <NavLink to={'/products'}> Products </NavLink>

      </div>
      <button>LogIn</button>
    </div>
  );
};

export default Navbar;
