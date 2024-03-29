import React from "react";
import { Link } from "react-router-dom";
import iframe from "react-iframe";

const Contact = () => {
  return (
    <header id="contact" className="section-contact">
      <div className="container">
        <h1>
          <center>Contact Us</center>
        </h1>
      </div>
      <div className="card-panel white black-text">
        <i className="material-icons small"> call</i>
        <h4>Call Us</h4>
        <p>(808)-224-2240 Monday-Friday from 8am-4pm Standard Hawaii time</p>
        <br />
        <i className="material-icons small"> email</i>
        <h4>Email Us</h4>
        <p>info@alohababe.com</p>
        <h4>
          <Link to="/shop">
            <a className="waves-effect white waves-light btn">
              <i className="material-icons right">shopping_basket</i>
              Back to Swimwear
            </a>
          </Link>
        </h4>
      </div>
      <div className="location-container">
        <div className="row">
          <div className="col s12 m6">
            <div className="card-panel white black-text left">
              <h4>
                <b>Shop at Our Store Location</b>
              </h4>
              <ul>
                <li className="collection-item">aloha babe</li>
                <li className="collection-item">45-3390 Mamane St</li>
                <li className="collection-item">Honokaa, HI 96727</li>
              </ul>

              <div style={{ float: "right", paddingRight: "5px" }}>
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
        </div>
      </div>
    </header>
  );
};

export default Contact;
