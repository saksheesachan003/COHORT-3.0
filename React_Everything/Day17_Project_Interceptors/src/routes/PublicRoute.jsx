import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router";
import { Auth } from "../context/AuthContext";

const PublicRoute = () => {
  console.log("Public route rendering...");
  const { loggedInUser } = useContext(Auth);

  // if loggedInUser value is there, then will run this block and navigate to main
  if (loggedInUser) {
    return <Navigate to={"/main"} />;
  }

  // if loggedInValue is not there then return outlet
  return <Outlet />;
};

export default PublicRoute;
