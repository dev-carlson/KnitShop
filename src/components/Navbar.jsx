import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { BsShopWindow } from "react-icons/bs";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton"></div>
      <div className="links">
        <Link to="/" className="icon-class">
          <BsShopWindow />
        </Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Production">Production</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/CareAndRepair">CareAndRepair</Link>
      </div>
    </div>
  );
}

export default Navbar;
