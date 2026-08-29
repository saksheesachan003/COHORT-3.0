import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router";
import { Auth } from "../context/AuthContext";

const ProtectedRoute = () => {
  console.log("Protected Route rendering....");
  const { loggedInUser } = useContext(Auth);

  // if loggedInUser value is null ( falsy ), then will run this block and navigate to login
  if (!loggedInUser) {
    return <Navigate to={"/"} />;
  }

  // if loggedInValue is there then return outlet, navigate to main
  return <Outlet />;
};

export default ProtectedRoute;
