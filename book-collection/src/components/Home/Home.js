import React from "react";
import "./Home.css";

import Navbar from "../Navbar/Navbar.js";
import Genre from "../Genre/Genre.js";
import Footer from "../Footer/Footer.js";
import About from "../About/About.js";
import AllBooks from "../AllBooks/AllBooks.js";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid background-image" id="mainDiv">
        <div>
          <h1 className="welcome">Welcome to Word World</h1>
          <div className="quotes">
            <h2>A writer only begins a book.</h2>
            <h2>A reader finishes it.</h2>
          </div>
        </div>
      </div>

      <Genre />
      <AllBooks />
      <About />

      <Footer />
    </div>
  );
};

export default Home;
