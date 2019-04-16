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
                <Link to="/Shop">Shop Swim</Link>
              </li>
              <li>
                <Link to="/">
                  <i className="material-icons">home</i>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <i className="material-icons">favorite</i>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <i className="material-icons">shopping_basket</i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
