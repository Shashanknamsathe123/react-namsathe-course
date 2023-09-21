import React from "react";
import ReactDOM from "react-dom/client";
import {HEADER_IMAGE} from "../components/utils/constants"

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo1"
          src={HEADER_IMAGE}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Header
