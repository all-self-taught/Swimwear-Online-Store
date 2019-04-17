import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div class="navbar-fixed">
      <nav class="black">
        <div class="container">
          <div class="nav-wrapper">
            <div class="brand-logo">
              <i class="small material-icons">filter_vintage</i>aloha babe
            </div>
            <ul class="right hide-on-med-and-down">
              <li>
                <a href="/shop">Shop Swim</a>
              </li>
              <li>
                <a href="/">
                  <i className="material-icons">home</i>
                </a>
              </li>

              <li>
                <a href="/testimonial">
                  <i className="material-icons">favorite</i>
                </a>
              </li>
              <li>
                <a href="/cart">
                  <i className="material-icons">shopping_basket</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
