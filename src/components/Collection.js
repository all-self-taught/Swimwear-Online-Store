import React from "react";
// import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <section id="popular" className="section section-popular scrollspy">
      <div className="container">
        <div className="column">
          <p className="section__sup">IF IT'S A BIKINI...</p>
          <h2 className="section__title">
            BABE, <br /> WE GOT YOU
          </h2>
        </div>
        <div className="row">
          <div className="col s12 m7 center">
            <div className="card">
              <div className="card-image">
                <img
                  src="https://www.thecoolhour.com/wp-content/uploads/2016/12/DSC0303.jpg"
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
                  Whether it’s with a trendy top or a cheeky bottom, we’re all
                  about keeping you naturally cute and effortlessly chic
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 m7 center">
            <div className="card">
              <div className="card-image">
                <img
                  src="https://www.thecoolhour.com/wp-content/uploads/2016/12/004600-R1-4.jpg"
                  alt=""
                />
                <span className="card-title" />
                <a className="btn-floating halfway-fab waves-effect waves-light black">
                  <i className="material-icons">favorite</i>
                </a>
              </div>
              <div className="card-content">
                <p>
                  We think you’re dope just the way you are, but we’re here to
                  give you that little bit of extra
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 m7 center">
            <div className="card">
              <div className="card-image">
                <img
                  src="https://www.thecoolhour.com/wp-content/uploads/2016/12/DSC0284.jpg"
                  alt=""
                />
                <span className="card-title" />
                <a className="btn-floating halfway-fab waves-effect waves-light black">
                  <i className="material-icons">favorite</i>
                </a>
              </div>
              <div className="card-content">
                <p>
                  Shop our luxe swimwear collection and find this year’s perfect
                  suit for the beach and beyond
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 center">
          <center>
            <a href="/shop" className="btn btn-large white ">
              <i className="material-icons left">shopping_basket</i> SHOP LATEST
              ARRIVALS
            </a>
          </center>
        </div>
      </div>
    </section>
  );
};

export default Collection;
