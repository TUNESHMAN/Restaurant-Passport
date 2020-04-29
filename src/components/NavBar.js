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
          <NavLink to="/cities">CITIES</NavLink>
          <NavLink to="/register">SIGN UP/SIGN IN</NavLink>
          <NavLink to="/cities/restaurants">RESTAURANTS</NavLink>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
