import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/cities">CITIES</Link>
          <Link to="/register">SIGN UP/SIGN IN</Link>
          <Link to="/cities/restaurants">RESTAURANTS</Link>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
