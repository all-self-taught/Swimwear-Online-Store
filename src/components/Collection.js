import React, { Component } from "react";
import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <section id="popular" class="section section-popular scrollspy">
      <div class="container">
        <div class="column">
          <p class="section__sup">IF IT'S A BIKINI...</p>
          <h2 class="section__title">
            BABE, <br /> WE GOT YOU
          </h2>
        </div>
        <div class="row">
          <div class="col s12 m7 center">
            <div class="card">
              <div class="card-image">
                <img
                  src="https://www.thecoolhour.com/wp-content/uploads/2016/12/DSC0303.jpg"
                  height="auto"
                  width="auto"
                  alt=""
                />
                <span class="card-title" />
                <a class="btn-floating halfway-fab waves-effect waves-light black">
                  <i class="material-icons">favorite</i>
                </a>
              </div>
              <div class="card-content">
                <p>
                  Whether it’s with a trendy top or a cheeky bottom, we’re all
                  about keeping you naturally cute and effortlessly chic
                </p>
              </div>
            </div>
          </div>
          <div class="col s12 m7 center">
            <div class="card">
              <div class="card-image">
                <img
                  src="https://www.thecoolhour.com/wp-content/uploads/2016/12/004600-R1-4.jpg"
                  alt=""
                />
                <span class="card-title" />
                <a class="btn-floating halfway-fab waves-effect waves-light black">
                  <i class="material-icons">favorite</i>
                </a>
              </div>
              <div class="card-content">
                <p>
                  We think you’re dope just the way you are, but we’re here to
                  give you that little bit of extra
                </p>
              </div>
            </div>
          </div>
          <div class="col s12 m7 center">
            <div class="card">
              <div class="card-image">
                <img
                  src="https://www.thecoolhour.com/wp-content/uploads/2016/12/DSC0284.jpg"
                  alt=""
                />
                <span class="card-title" />
                <a class="btn-floating halfway-fab waves-effect waves-light black">
                  <i class="material-icons">favorite</i>
                </a>
              </div>
              <div class="card-content">
                <p>
                  Shop our luxe swimwear collection and find this year’s perfect
                  suit for the beach and beyond
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12 center">
          <center>
            <a href="/shop" class="btn btn-large white ">
              <i class="material-icons left">shopping_basket</i> SHOP LATEST
              ARRIVALS
            </a>
          </center>
        </div>
      </div>
    </section>
  );
};

export default Collection;
