import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  const [selected, setSelected] = useState<number>(0);
  const handleClick = (divNum: number) => () => {
    setSelected(divNum);
  };

  const isMobile = useMediaQuery("(max-width: 800px)");
  console.log(isMobile);

  return (
    <div className="header-container">
      {isMobile ? (
        <div></div>
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
  );
}

export default Header;
