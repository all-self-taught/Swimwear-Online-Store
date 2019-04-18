import React from "react";
// import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <section id="popular" class="section section-popular scrollspy">
      <div class="container">
        <center>
          <div class="column">
            <p class="section__love">WE LOVE OUR ALOHA BABES...</p>

            <h2 class="section__intro">
              Get to know this month's featured #alohababe and shop her look!
              <br />
            </h2>
          </div>
        </center>
        <div class="row">
          <div class="col s12 m7 center">
            <div class="card">
              <div class="card-image">
                <img
                  src="https://i2.wp.com/swimwear-magazine.com/wp-content/uploads/2017/01/480683846.jpg?fit=386%2C580"
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
                  Say aloha to this beauty. Her carefree style reflects her
                  laid-back, down-to-earth spirit
                </p>
              </div>
            </div>
          </div>
          <div class="col s12 m7 center">
            <div class="card">
              <div class="card-image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0426/9481/files/Francesca-Aiello-Model_2048x2048.jpg?36133802306787462"
                  alt=""
                />
                <span class="card-title" />
                <a class="btn-floating halfway-fab waves-effect waves-light black">
                  <i class="material-icons">favorite</i>
                </a>
              </div>
              <div class="card-content">
                <p>
                  She dreams of an eternal summer with salt water in her hair,
                  sand between her toes, and of course, her aloha babe bikini
                </p>
              </div>
            </div>
          </div>
          <div class="col s12 m7 center">
            <div class="card">
              <div class="card-image">
                <img
                  src="http://www2.pictures.zimbio.com/gi/Francesca+Aiello+Model+Casting+Call+W+South+BD4w6ytPxFBl.jpg"
                  alt=""
                />
                <span class="card-title" />
                <a class="btn-floating halfway-fab waves-effect waves-light black">
                  <i class="material-icons">favorite</i>
                </a>
              </div>
              <div class="card-content">
                <p>
                  Are you an #alohababe? Use the #alohababe hashtag on Instagram
                  so we can see your aloha babe bikini style!
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
              <i class="material-icons left">shopping_basket</i> SHOP #ALOHABABE
            </a>
          </center>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
