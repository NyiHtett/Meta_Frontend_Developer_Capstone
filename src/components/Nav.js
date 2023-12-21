import React from "react";
import img from "../assets/Logo.png";
import "../App.css";
import Main from "../pages/Main";
import { Router, Route, Routes, Link } from "react-router-dom";

const Nav = () => {

  return (
    <nav>
      {/* logo image */}
      <a>
        <img src={img} width={300} alt="little lemon logo image" />
      </a>

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
      </div>
    </nav>
  );
};

export default Nav;
