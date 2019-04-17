import React from "react";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <div className="story-container">
      <header id="story">
        <h1>Our Story </h1>
      </header>
      <section id="section-a">
        <h4>
          <Link to="/shop">
            <a class="waves-effect white waves-light btn">
              <i class="material-icons right">shopping_basket</i>
              Back to Swimwear
            </a>
          </Link>
        </h4>
        <p>
          <h4 class="white-text center">our story</h4>
        </p>
      </section>
    </div>
  );
};

export default Story;
