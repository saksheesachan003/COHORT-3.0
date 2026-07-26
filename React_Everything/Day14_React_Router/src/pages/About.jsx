import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router";

const About = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>This is About Page</h1>
      
      {/* step 1 :- using NavLink */}
      <NavLink to={"/about/nested"}>NavLink</NavLink> <br />

      {/* step 2 :- using button ( useNavigate ) */}
      <button onClick={() => navigate("/about/nested")}>Button</button>
      <Outlet />
    </div>
  );
};

export default About;
