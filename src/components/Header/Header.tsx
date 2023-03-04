import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  const [selected, setSelected] = useState<number>(0);
  const handleClick = (divNum: number) => () => {
    setSelected(divNum);
  };

  return (
    <div className="header">
      <div className="links">
        <Link
          to="/"
          className="header-item"
          id={selected === 1 ? "active" : ""}
          onClick={handleClick(1)}
        >
          About
        </Link>
        <Link
          to="/projects"
          className="header-item"
          id={selected === 2 ? "active" : ""}
          onClick={handleClick(2)}
        >
          Projects
        </Link>
      </div>
    </div>
  );
}

export default Header;
