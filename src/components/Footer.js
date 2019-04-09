import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer class="page-footer #000000 black">
      <div class="container">
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text left">company</h5>
          <br />
          <br />
          <ul>
            <li>
              <a class="grey-text" href="#!">
                Our Story
              </a>
            </li>
            <li>
              <a class="grey-text" href="#!">
                Contact Us
              </a>
            </li>
            <li>
              <a class="grey-text" href="#!">
                Press
              </a>
            </li>
            <li>
              <div id="social">
                <a href="https://www.instagram.com/alohababe.co/?hl=en">
                  <img
                    src="https://image.flaticon.com/icons/svg/1384/1384015.svg"
                    alt="aloha babe insta"
                    height="30"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-copyright">
        <div class="container">
          <a class="black-text" href="#!">
            © 2019 aloha babe • Terms & Conditions • Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
