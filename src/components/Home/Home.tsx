import React from "react";
import "./Home.scss";
import LinkBar from "../LinkBar/LinkBar";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Hi! I'm Tom, welcome to my page</h1>
      <h3 className="home-details">
        <div className="first-line">
          I'm a full stack developer with a focus in React and .NET/C#.  
        </div>
        <div className="second-line">
          When I'm not actively coding you can find me plucking a guitar, gaming, and rock climbing.
        </div>
      </h3>
      <LinkBar/>
    </div>
  );
}

export default Home;
