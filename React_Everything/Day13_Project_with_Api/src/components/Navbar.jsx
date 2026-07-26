import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
  let { setIsCartOpen } = useContext(MyStore);

  return (
    <div className="bg-black rounded p-5 flex justify-between items-center text-white">
      <div>Logo</div>
      <div className="flex gap-10 text-xl">
        <p onClick={() => setIsCartOpen(false)}>Home</p>
        <p onClick={() => setIsCartOpen(true)}>Cart</p>
      </div>
      <button>LogIn</button>
    </div>
  );
};

export default Navbar;
