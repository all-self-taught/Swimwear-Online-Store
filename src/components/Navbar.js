import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <a href="aloha babe" class="brand-logo">
          <i class="material-icons">filter_vintage</i>aloha babe
        </a>
        <ul class="right">
          <li>
            <Link to="/">Shop Swim</Link>
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
          <li>
            <form>
              <div class="input-field">
                <input id="search" type="search" required />
                <label class="label-icon" for="search">
                  <i class="material-icons">search</i>
                </label>
                <i class="material-icons">close</i>
              </div>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
