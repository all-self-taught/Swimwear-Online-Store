import React from "react";
import ReactPlayer from "react-player";

const Testimonial = () => {
  return (
    <section id="popular" className="section section-popular scrollspy">
      <div className="container">
        <center>
          <div className="column">
            <p className="section__love">WE LOVE OUR ALOHA BABES...</p>
          </div>
        </center>
        <center>
          <div className="collection-hero__video-container">
            <iframe
              src="https://player.vimeo.com/video/206077155?title=0&amp;byline=0&amp;portrait=0&amp;background=1"
              width="840"
              height="438"
              frameBorder="0"
            />
          </div>
        </center>
        <center>
          <h2 className="section__intro">
            Get to know this month's featured #alohababe and shop her fav looks!
            <br />
          </h2>
        </center>

        <div className="row">
          <div className="col s12 m7 center">
            <div className="card">
              <div className="card-image">
                <img
                  src="https://i2.wp.com/swimwear-magazine.com/wp-content/uploads/2017/01/480683846.jpg?fit=386%2C580"
                  height="auto"
                  width="auto"
                  alt=""
                />
                <span className="card-title" />
                <a className="btn-floating halfway-fab waves-effect waves-light black">
                  <i className="material-icons">favorite</i>
                </a>
              </div>
              <div className="card-content">
                <p>
                  Say aloha to this beauty. Her carefree style reflects her
                  laid-back, down-to-earth spirit
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 m7 center">
            <div className="card">
              <div className="card-image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0426/9481/files/Francesca-Aiello-Model_2048x2048.jpg?36133802306787462"
                  alt=""
                />
                <span className="card-title" />
                <a className="btn-floating halfway-fab waves-effect waves-light black">
                  <i className="material-icons">favorite</i>
                </a>
              </div>
              <div className="card-content">
                <p>
                  She dreams of an eternal summer with salt water in her hair,
                  sand between her toes, and of course, her aloha babe bikini 👙
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 m7 center">
            <div className="card">
              <div className="card-image">
                <img
                  src="http://www2.pictures.zimbio.com/gi/Francesca+Aiello+Model+Casting+Call+W+South+BD4w6ytPxFBl.jpg"
                  alt=""
                />
                <span className="card-title" />
                <a className="btn-floating halfway-fab waves-effect waves-light black">
                  <i className="material-icons">favorite</i>
                </a>
              </div>
              <div className="card-content">
                <center>
                  <p>
                    Use the #alohababe hashtag on Instagram so we can see your
                    aloha babe bikini style!
                  </p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <center>
          <p className="section__intro">
            Are you an #alohababe? <br />
          </p>
        </center>
      </div>
      <div className="row">
        <div className="col s12 center">
          <center>
            <a href="/shop" className="btn btn-large white ">
              <i className="material-icons left">shopping_basket</i> SHOP SWIM
            </a>
          </center>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
