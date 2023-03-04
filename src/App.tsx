import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
