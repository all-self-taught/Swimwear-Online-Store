import React from "react";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <div className="story-container">
      <header id="story">
        <h1>Our Story </h1>
      </header>
      <section id="section-a">
        <h5>
          <Link to="/shop">
            <a href="#" class="button">
              Back to Shopping
            </a>
          </Link>{" "}
        </h5>
        <p>
          <h4 class="white-text center">our story</h4>
        </p>
      </section>
    </div>
  );
};

export default Story;
