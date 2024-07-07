import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Hero Compliance Design, LLC.</p>
        <ul className="footer-links">
          <li>
            <Link to="/termsService">Terms of Service</Link>
          </li>
          <li>
            <Link to="#" className="link-bar">|</Link>
          </li>
          <li>
            <Link to="/privacyPolicy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
