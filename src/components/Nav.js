import React from "react";
import img from "../assets/Logo.png";
import Main from "../pages/Main";
import { Router, Route, Routes, Link } from "react-router-dom";

const Nav = () => {

  return (
    <nav>
      {/* logo image */}
      <Link to="/">
        <img src={img} width={300} alt="little lemon logo image" />
      </Link>

      {/* navigation links */}
      <div className="nav-links-group">
        <Link to="/" class="nav-item">
          Home
        </Link>
        <Link to="/About" className="nav-item">
          About
        </Link>
        <Link to="/Menu" className="nav-item">
          Menu
        </Link>
        <Link to="/Reserve" className="nav-item">
          Reserve
        </Link>
        <Link to="/Checkout" className="nav-item">
          Checkout
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
