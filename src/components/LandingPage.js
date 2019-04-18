import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.css";
import Gallery from "./Gallery";
import Collection from "./Collection";
import ReactPlayer from "react-player";

const LandingPage = () => {
  return (
    <div className="home-container">
      <header id="showcase">
        <p>Say aloha to our new bikini collection </p>
        <Link to="/shop" className="button">
          SHOP THE COLLECTION
        </Link>
      </header>
      <div>
        <Collection />
      </div>

      <div className="hero--video-block video-wrapper small--hide">
        <iframe
          src="https://player.vimeo.com/video/331042234?autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1"
          width="1920"
          height="1080"
          frameborder="0"
        />
      </div>

      <section id="section-a">
        <div>
          <Gallery />
        </div>
      </section>
      <hr />
      <section id="section-b">
        <p>
          <h1>
            <center>luxe swimwear </center>
          </h1>
          If you’re looking for versatile swimwear that can seamlessly
          transition from beach to street, look no further than our designs. Our
          exclusive suits blend top clothing trends with comfortable cuts
          intended to show off your assets. Not only are our luxe bikinis
          effortlessly chic, they also capture a beachy vibe in styles that can
          easily transition to stylish ensembles. Aloha Babe Bikinis is equally
          as committed to quality swimwear as we are to trendy designs. With our
          suits, you can always count on luxurious fabrics, well-made bikini
          swimwear that is built to last, flattering and versatile shapes
          suitable for a variety of body types. But don’t just take our word for
          it—shop our luxe swimwear collection and find this year’s perfect suit
          for the beach and beyond.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
