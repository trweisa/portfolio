import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import menuIcon from './menuIcon.png'

function Header() {
  const [selected, setSelected] = useState<number>(0);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleClick = (divNum: number) => () => {
    setSelected(divNum);
    setNavbarOpen(false);
  };

  const menuClick = () => () => {
    setNavbarOpen(!navbarOpen);
  };

  const isMobile = useMediaQuery("(max-width: 800px)");

  return (
    <div>
      <div className="header-container">
        {isMobile ? (
          <div className="header-desktop">
            <div className="header-logo-container">
              <div className="header-logo-img"/>
              <Link to="/" className="header-name" onClick={handleClick(1)}>
                TOM WEISANSAL
              </Link>
            </div>
            <div className="spacer"/>
            <img className="menuIcon" src={menuIcon} onClick={menuClick()} alt="menuIcon"/>
          </div>
        ) : (
          <div className="header-desktop">
            <div className="header-logo-container">
              <div className="header-logo-img"></div>
              <Link to="/" className="header-name" onClick={handleClick(1)}>
                TOM WEISANSAL
              </Link>
            </div>
            <div className="spacer"></div>
            <div className="nav-buttons">
              <Link
                to="/"
                className="header-item"
                id={selected === 1 ? "active" : ""}
                onClick={handleClick(1)}
              >
                ABOUT
              </Link>
              <Link
                to="/projects"
                className="header-item"
                id={selected === 2 ? "active" : ""}
                onClick={handleClick(2)}
              >
                PROJECTS
              </Link>
            </div>
          </div>
        )}
      </div>
      {
        navbarOpen ? (
          <div>
            <div className="nav-buttons">
              <Link
                to="/"
                className="header-item"
                id={selected === 1 ? "active" : ""}
                onClick={handleClick(1)}
              >
                ABOUT
              </Link>
              <Link
                to="/projects"
                className="header-item"
                id={selected === 2 ? "active" : ""}
                onClick={handleClick(2)}
              >
                PROJECTS
              </Link>
            </div>
          </div>
        ) : 
        (<div></div>)
      }
    </div>
  );
}

export default Header;
