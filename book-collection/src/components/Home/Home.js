// components/Home.js

import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar.js";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid background-image" id="mainDiv">
        <div>
          <h1 className="welcome">Welcome to Word World</h1>
          <h2>A writer only begins a book.</h2>
          <h2>A reader finishes it.</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
