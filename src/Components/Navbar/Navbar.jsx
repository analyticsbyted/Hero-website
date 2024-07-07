import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/Favicon/WordpressTransparent.png";
import mobileLogo from "../../assets/images/companyLogo.png"
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../Button/Button";
import featureFlags from "../../featureFlags"; // Import featureFlags

const Navbar = ({ mobileMenuOpen, toggleMobileMenu }) => {
  const handleMenuItemClick = () => {
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
  };

  return (
    <>
      <nav className={`navbar-container dark-nav`}>
        <div className="logo-section metallic-silver">
          <NavLink to="/" onClick={handleMenuItemClick}>
            <h2><img src={logo} alt="Logo" className="logo" />HCD </h2>
          </NavLink>
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? "open" : "hide-mobile-menu"}`}>
          <li>
            <NavLink to="/services" onClick={handleMenuItemClick}>Services</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={handleMenuItemClick}>About us</NavLink>
          </li>
          <li>
            <NavLink to="/insights" onClick={handleMenuItemClick}>Insights</NavLink>
          </li>
          {featureFlags.showTestimonials && (
            <li>
              <NavLink to="/testimonials" onClick={handleMenuItemClick}>Testimonials</NavLink>
            </li>
          )}
          {featureFlags.enableRegister && (
            <li>
              <NavLink to="/register" onClick={handleMenuItemClick}>Register</NavLink>
            </li>
          )}
          <li>
            <NavLink to="/contact" onClick={handleMenuItemClick}>
              <Button>Contact Us</Button>
            </NavLink>
          </li>
          {mobileMenuOpen && ( // Render mobile logo only when menu is open
            <li>
              <NavLink to="/" onClick={handleMenuItemClick}>
                <img src={mobileLogo} alt="Mobile Logo" className="mobile-logo" />
              </NavLink>
            </li>
          )}
        </ul>

        {/* Hamburger Menu Button */}
        {mobileMenuOpen ? (
          <FaTimes className="menu-icon" onClick={toggleMobileMenu} /> // 'X' icon for closing
        ) : (
          <FaBars className="menu-icon" onClick={toggleMobileMenu} /> // Hamburger icon for opening
        )}
      </nav>
    </>
  );
};

export default Navbar;
