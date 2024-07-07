// src/Components/Layout.jsx

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { RemoveScroll } from "react-remove-scroll";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ playState, setPlayState }) => {
  // Receive props from App.jsx

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <RemoveScroll enabled={mobileMenuOpen}>
        <Outlet />
      </RemoveScroll>
      <Footer />
    </>
  );
};

export default Layout;
