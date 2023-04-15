import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { BsShopWindow } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const handleLinkClick = () => {
    setExpandNavbar(false);
  };

  return (
    <nav className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <div className="links" onClick={handleLinkClick}>
        <Link to="/" className="icon-class">
          <BsShopWindow />
        </Link>
        <Link onClick={handleLinkClick} to="/Shop">
          Shop
        </Link>
        <Link onClick={handleLinkClick} to="/Production">
          Production
        </Link>
        <Link onClick={handleLinkClick} to="/Gallery">
          Gallery
        </Link>
        <Link onClick={handleLinkClick} to="/CareAndRepair">
          Care &amp; Repair
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
