import React from "react";
import { useContext } from "react";

// const Navbar = ({ setIsCartOpen }) => {

const Navbar = () => {
  let {setIsCartOpen} = useContext(MyShop);
  return (
    <div className="bg-black rounded p-5 flex justify-between items-center text-white">
      <div>Logo</div>
      <div className="flex gap-10 text-xl">
        <p className="cursor-ppointer" onClick={() => setIsCartOpen(false)}>
          Home
        </p>
        <p className="cursor-ppointer" onClick={() => setIsCartOpen(true)}>
          Cart
        </p>
      </div>
      <button>LogIn</button>
    </div>
  );
};

export default Navbar;
