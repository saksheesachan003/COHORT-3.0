import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Detail from "../pages/Detail";
import { Routes, Route, NavLink } from "react-router";
import NestedPage from "../pages/NestedPage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* Nested Routing -> under home detail page */}
        <Route path="/home" element={<Home />}>
          <Route path="detail" element={<Detail />} />
        </Route>

        <Route path="/about" element={<About />}>
          <Route path="nested" element={<NestedPage />} />
        </Route>
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
