import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="showcase">
      <a class="showcase" href="#two!">
        <img src="https://d1hano0onsuhm2.cloudfront.net/wp-content/uploads/2019/02/16102741/FrankiesBikinis-Ali-SpringBloom.jpeg" />
      </a>
      <div className="center-box">
        <div className="white-box hpTitle">
          <h1 id="hpTitle">Aloha Babes</h1>
        </div>
        <div className="row">
          <div className="col l3 offset-l2 m5 offset-m1 s10 offset-s1">
            <Link to="/shop">
              <h4 className="white-box">
                <strong>SHOP THE COLLECTION</strong>
              </h4>
            </Link>
          </div>
          <div class="container">
            <h3>#alohababes</h3>
            <div
              class="carousel carousel-slider"
              id="demo-carousel-auto"
              data-indicators="true"
            >
              <a class="carousel-item" href="#one!">
                <img src="images/banana.jpg" />
              </a>
              <a class="carousel-item" href="#two!">
                <img src="images/mango.jpg" />
              </a>
              <a class="carousel-item" href="#three!">
                <img src="images/strawberries.jpg" />
              </a>
              <a class="carousel-item" href="#four!">
                <img src="images/currant.jpg" />
              </a>
              <a class="carousel-item" href="#five!">
                <img src="images/mango.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
