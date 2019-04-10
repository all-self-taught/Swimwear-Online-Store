import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="nav-wrapper #000000 black">
      <div class="container">
        <div class="brand-logo">
          <i class="small material-icons">filter_vintage</i>aloha babe
        </div>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link to="/Shop">Shop Swim</Link>
          </li>
          <li>
            <Link to="/">
              <i className="material-icons">person</i>
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
    </nav>
  );
};

export default Navbar;
