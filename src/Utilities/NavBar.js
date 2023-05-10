import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="navbar-text">
          Home
        </Link>
        <Link to="/student" className="navbar-text">
          Student
        </Link>
        <Link to="/contact" className="navbar-text">
          Contact Us
        </Link>
      </div>
    </>
  );
};

export default NavBar;
