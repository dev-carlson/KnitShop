import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { BsShopWindow } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  return (
    <nav className="navbar">
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <div className={`links ${expandNavbar ? "expand" : ""}`}>
        <Link to="/" className="icon-class">
          <BsShopWindow />
        </Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Production">Production</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/CareAndRepair">Care &amp; Repair</Link>
      </div>
    </nav>
  );
}

export default Navbar;
