import React, { Component } from "react";
import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <section id="popular" class="section section-popular scrollspy">
      <div class="container">
        <div class="row">
          <h4 class="center">
            <span class="pink-text">Trends We Love</span>
          </h4>
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0158/2548/products/Frankies-Bikinis-Lookbook-2-Spring-Summer-1_2048x.jpg?v=1550248900"
                  alt=""
                />
                <span class="card-title" />
              </div>
              <div class="card-content">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptas aliquid fugiat corporis laudantium, architecto
                  delectus?
                </p>
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0158/2548/products/Frankies-Bikinis-USA-5_2048x.jpg?v=1525890710"
                  alt=""
                />
                <span class="card-title" />
              </div>
              <div class="card-content">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptas aliquid fugiat corporis laudantium, architecto
                  delectus?
                </p>
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card">
              <div class="card-image">
                <img
                  src="https://cdn.shopify.com/s/files/1/0158/2548/products/Frankies-Bikinis-Lookbook-1-Neon_2048x.jpg?v=1543514901"
                  alt=""
                />
                <span class="card-title" />
              </div>
              <div class="card-content">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptas aliquid fugiat corporis laudantium, architecto
                  delectus?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col s12 center">
            <a href="/Shop" class="btn btn-large white">
              <i class="material-icons left">shopping_basket</i> SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
