import React from "react";
import { Link } from "react-router-dom";
import Contact from "../FooterLinks/Contact";
import Story from "../FooterLinks/Story";
import Press from "../FooterLinks/Press";

const Footer = () => {
  return (
    <footer class="page-footer black">
      <section class="section section-follow black white-text center">
        <div class="container">
          <div class="row">
            <div class="col s12">
              <h3>FOLLOW US ON SOCIAL MEDIA</h3>
              <p>Be in the loop with aloha babe </p>
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
      <div class="container">
        <div class="grid grid--no-gutters flex small--flex-column site-footer__flex">
          <div class="links">
            <Link to="/story">Our Story</Link>
            <a class="grey-text" href="#!" />
            <br />
            <Link to="/contact">Contact Us</Link>
            <a class="grey-text" href="#!" />
            <br />
            <Link to="/press">Press</Link>
            <a class="grey-text" href="#!" />
          </div>
        </div>
      </div>

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
