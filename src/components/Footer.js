import React from "react";
import { Link } from "react-router-dom";
import Contact from "./FooterLinks/Contact";
import Story from "./FooterLinks/Story";
import Press from "./FooterLinks/Press";

const Footer = () => {
  return (
    <footer className="page-footer black">
      <section className="section section-follow black white-text center">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h3 className="follow-us">FOLLOW US ON SOCIAL MEDIA</h3>
              <p>Be in the loop with aloha babe </p>
              <a
                href="https://www.instagram.com/alohababe.co/?hl=en"
                target="_blank"
                className="white-text"
              >
                <i className="fab fa-instagram fa-4x" />
              </a>
              <a href="" target="_blank" className="white-text">
                <i className="fab fa-facebook fa-4x" />
              </a>
              <a href="" target="_blank" className="white-text">
                <i className="fab fa-twitter fa-4x" />
              </a>
              <a href="" target="_blank" className="white-text">
                <i className="fab fa-pinterest fa-4x" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="grid grid--no-gutters flex small--flex-column site-footer__flex">
          <div className="links">
            <Link to="/story">Our Story</Link>
            <a className="grey-text" href="#!" />
            <br />
            <Link to="/contact">Contact Us</Link>
            <a className="grey-text" href="#!" />
            <br />
            <Link to="/press">Press</Link>
            <a className="grey-text" href="#!" />
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div style={{ float: "center", paddingRight: "5px" }}>
            <h5 className="black-text center">
              © 2019 aloha babe • Terms & Conditions • Privacy Policy
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
