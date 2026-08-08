import React from "react";
import About from "../pages/About";
import Products from "../pages/Products";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Home />} />

        {/* if admin value is true, only then call fetch about o/w not */}
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="/products" element={<Products />} />

        {/* Gives dynamic path using ( colon : ) */}
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;