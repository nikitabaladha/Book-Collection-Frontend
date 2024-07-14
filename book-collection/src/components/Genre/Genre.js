import React from "react";
import "./Genre.css";
import horrorImage from "../../images/horror-1.png";
import historyImage from "../../images/history-1.png";
import mystery from "../../images/mystery-1.png";
import romanceImage from "../../images/romance-1.png";
import scienceFictionImage from "../../images/science-fiction-1.png";
import selfHelpImage from "../../images/self-help-1.png";

const Genre = () => {
  return (
    <div>
      <div id="Genre" className="container-fluid">
        <div id="Genre-heading">
          <h4>Find Your Favorite Genre !</h4>
        </div>
        <div className=" container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-md-4 col-lg-2 px-15 d-flex justify-content-center ">
              <div className="Genre-card ">
                <img
                  src={horrorImage}
                  className="card-img-top wave-image"
                  alt="Horror Book"
                />

                <div className="Genre-card-body">
                  <h6 className="Genre-card-title">Horror</h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-2 px-15 d-flex justify-content-center">
              <div className="Genre-card">
                <img
                  src={historyImage}
                  className="card-img-top wave-image"
                  alt="History Book"
                />
                <div className="Genre-card-body">
                  <h6 className="Genre-card-title">History</h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-2 px-15 d-flex justify-content-center">
              <div className="Genre-card ">
                <img
                  src={mystery}
                  className="card-img-top wave-image"
                  alt="Mystery Book"
                />
                <div className="Genre-card-body">
                  <h6 className="Genre-card-title">Mystery</h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-2 px-15 d-flex justify-content-center">
              <div className="Genre-card ">
                <img
                  src={romanceImage}
                  className="card-img-top wave-image"
                  alt="Guide"
                />
                <div className="Genre-card-body">
                  <h6 className="Genre-card-title">Romance</h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-2 px-15 d-flex justify-content-center">
              <div className="Genre-card">
                <img
                  src={scienceFictionImage}
                  className="card-img-top wave-image"
                  alt="Science Fiction Book"
                />
                <div className="Genre-card-body">
                  <h6 className="Genre-card-title">Science Fiction</h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-2 px-15 d-flex justify-content-center">
              <div className="Genre-card ">
                <img
                  src={selfHelpImage}
                  className="card-img-top wave-image"
                  alt="Self Help Book"
                />
                <div className="Genre-card-body">
                  <h6 className="Genre-card-title">Self Help </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genre;
