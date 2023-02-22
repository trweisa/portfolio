import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Tom Weisansal</h1>
      <Link to="/" className="header-item">
        Home
      </Link>
      <Link to="/projects" className="header-item">
        Projects
      </Link>
      <Link to="/about" className="header-item">
        About
      </Link>
    </div>
  );
}

export default Header;
