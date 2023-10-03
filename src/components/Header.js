import React from "react";
import ReactDOM from "react-dom/client";
import {HEADER_IMAGE} from "../components/utils/constants"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2">
      <div className="logo-container">
        <img
          className="w-40"
          src={HEADER_IMAGE}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 flex-wrap">
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contactus">Contact Us</Link></li>
          <li className="px-4"><Link to="/cart">Cart</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Header
