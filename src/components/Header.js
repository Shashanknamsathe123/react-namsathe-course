import React from "react";
import ReactDOM from "react-dom/client";
import {HEADER_IMAGE} from "../components/utils/constants"
import { Link } from "react-router-dom";

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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Header
