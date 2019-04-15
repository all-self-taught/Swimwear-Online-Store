import React from "react";
import { Link } from "react-router-dom";
import iframe from "react-iframe";
// <div style={{ float: "right", paddingRight: "5px" }}>
//   <iframe
//     width="80%"
//     height="200"
//     src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=4489%20Aku%20Road%2C%20Hanalei%2C%20HI%2096714+(aloha%20babe)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
//     frameborder="0"
//     scrolling="no"
//     marginheight="0"
//     marginwidth="0"
//   >
//     <a href="https://www.maps.ie/map-my-route/">Draw map route</a>
//   </iframe>
// </div>
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
          <div style={{ float: "center", paddingRight: "5px" }}>
            <a class="text-black" href="#!">
              © 2019 aloha babe • Terms & Conditions • Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
