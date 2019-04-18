import React from "react";
import { Link } from "react-router-dom";
import iframe from "react-iframe";
import Form from "../Form";

const Contact = () => {
  return (
    <div className="info-page">
      <div
        id="shopify-section-page--info-page-header"
        className="shopify-section"
      >
        <div className="info-banner">
          <img
            className="lazyfade small--hide lazyautosizes lazyloaded"
            src="//cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_10x.jpg?v=1550740847"
            data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
            data-aspectratio="2.202937249666222"
            data-sizes="auto"
            width="100%"
            alt="Frankies Bikinis retailers"
            data-srcset="//cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_180x.jpg?v=1550740847 180w, //cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_360x.jpg?v=1550740847 360w, //cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_540x.jpg?v=1550740847 540w, //cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_720x.jpg?v=1550740847 720w, //cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_900x.jpg?v=1550740847 900w, //cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_1080x.jpg?v=1550740847 1080w, //cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_1296x.jpg?v=1550740847 1296w, //cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_1512x.jpg?v=1550740847 1512w, //cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_1728x.jpg?v=1550740847 1728w, //cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_2048x.jpg?v=1550740847 2048w"
            sizes="1020px"
            srcset="//cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_180x.jpg?v=1550740847 180w, //cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_360x.jpg?v=1550740847 360w, //cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_540x.jpg?v=1550740847 540w, //cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_720x.jpg?v=1550740847 720w, //cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_900x.jpg?v=1550740847 900w, //cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_1080x.jpg?v=1550740847 1080w, //cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_1296x.jpg?v=1550740847 1296w, //cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_1512x.jpg?v=1550740847 1512w, //cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_1728x.jpg?v=1550740847 1728w, //cdn.shopify.com/s/files/1/0158/2548/files/reatilers5_2048x.jpg?v=1550740847 2048w"
          />
        </div>
      </div>
      <h1 className="help">help, please...</h1>
      <br />
      <br />
      <h3 className="contact">Contact Us</h3>

      <div className="info-main">
        <div className="info-main__inner">
          <br />
          <i className="material-icons small"> call</i>
          <h4>CALL US</h4>
          <p>(808)-224-2240 Monday-Friday from 8am-4pm Standard Hawaii time</p>
          <i className="material-icons small"> email</i>
          <h4>EMAIL US</h4>
          <a
            href="mailto:Support@alohababe.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby="a11y-new-window-external-message"
          >
            Support@alohababe.com
          </a>
          <p />
          <h4>WHOLESALE INQUIRIES</h4>
          <p>
            <a
              href="mailto:Sales@alohababe.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby="a11y-new-window-external-message"
            >
              Sales@alohababe.com
            </a>
          </p>

          <h4>SHOP AT OUR STORE</h4>
          <ul>
            <li className="collection-item">aloha babe</li>
            <li className="collection-item">45-3390 Mamane St</li>
            <li className="collection-item">Honokaa, HI 96727</li>
          </ul>
          <div style={{ float: "left", paddingRight: "5px" }}>
            <iframe
              width="350vh"
              height="205vh"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=45-3390%20Mamane%20St%2C%20Honokaa%2C%20HI%2096727+(aloha%20babe)&amp;ie=UTF8&amp;t=h&amp;z=20&amp;iwloc=B&amp;output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            >
              <a href="https://www.maps.ie/map-my-route/" />
            </iframe>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>
        <center>
          <Link to="/">
            <a className="waves-effect white waves-light btn">
              <i className="material-icons left">home</i>
              BACK HOME
            </a>
          </Link>
        </center>
        <br />
        <br />
        <br />
      </h4>
    </div>
  );
};

export default Contact;
