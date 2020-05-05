import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT US</NavLink>
          <NavLink to="/register">SIGN UP</NavLink>
          <NavLink to="/login">SIGN IN</NavLink>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
