import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.css";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LandingPage = () => {
  return (
    <div className="home-container">
      <header id="showcase">
        <p>Say aloha to our new bikini collection. </p>
        <h1>
          <Link to="/shop">
            <a href="#" class="button">
              SHOP THE COLLECTION
            </a>
          </Link>
        </h1>
      </header>
      <section id="section-a">
        <div>
          <Carousel />
        </div>
      </section>
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
