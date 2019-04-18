import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="black">
        <div className="container">
          <div className="nav-wrapper">
            <div className="brand-logo">
              <i className="small material-icons">filter_vintage</i>aloha babe
            </div>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/shop">Shop Swim</Link>
              </li>
              <li>
                <Link to="/">
                  <i className="material-icons">home</i>
                </Link>
              </li>

              <li>
                <Link to="/testimonial">
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
