import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="p-4 flex item-center justify-between bg-black rounded">
      <div>
        <img
          className="rounded-full bg-yellow-500"
          width={35}
          src="https://cdn-icons-png.flaticon.com/512/7312/7312715.png"
          alt="No Image"
        />
      </div>
      <div className="flex gap-6 font-semibold text-white">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="p-2 bg-blue-700 text-white cursor-pointer rounded"
      >
        Create User
      </button>
    </div>
  );
};

export default Navbar;
