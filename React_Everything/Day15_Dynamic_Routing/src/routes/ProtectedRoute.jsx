import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  let isAdmin = false;

  if (!isAdmin) {
    console.log("hey i m running...");
    alert("you are not an admin");
    // if isadmin is false, then will go on home 
    return <Navigate to={"/"} />;
  }

  return children;
};

export default ProtectedRoute;