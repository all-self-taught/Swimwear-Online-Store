import React from "react";
import { Link } from "react-router-dom";
import Contact from "../FooterLinks/Contact";
import Story from "../FooterLinks/Story";
import Press from "../FooterLinks/Press";

const Footer = () => {
  return (
    <footer class="page-footer black">
      <div class="container">
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text left">company</h5>
          <br />
          <br />

          <ul>
            <li>
              <Link to="/story">Our Story</Link>
              <a class="grey-text" href="#!" />
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
              <a class="grey-text" href="#!" />
            </li>
            <li>
              <Link to="/press">Press</Link>
              <a class="grey-text" href="#!" />
            </li>
          </ul>
        </div>
      </div>
      <section class="section section-follow black white-text center">
        <div class="container">
          <div class="row">
            <div class="col s12">
              <h4>follow aloha babe</h4>
              <p>Follow us on social media for special offers</p>
              <a
                href="https://www.instagram.com/alohababe.co/?hl=en"
                target="_blank"
                class="white-text"
              >
                <i class="fab fa-instagram fa-4x" />
              </a>
              <a href="" target="_blank" class="white-text">
                <i class="fab fa-facebook fa-4x" />
              </a>
              <a href="" target="_blank" class="white-text">
                <i class="fab fa-twitter fa-4x" />
              </a>
              <a href="" target="_blank" class="white-text">
                <i class="fab fa-pinterest fa-4x" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="footer-copyright">
        <div class="container">
          <div style={{ float: "center", paddingRight: "5px" }}>
            <h5 class="black-text center">
              © 2019 aloha babe • Terms & Conditions • Privacy Policy
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
