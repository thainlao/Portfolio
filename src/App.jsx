import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Languages from "./components/Languages";
import Feedback from "./components/Feedback";


function App() {

  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Languages />
        <Project />
        <Feedback />
        <Contact />
    </div>
  );
}

export default App;
