import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Navbar1 from "./units/Navbar1";

export default function App() {
  return (
    <div>
      <Navbar1/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}