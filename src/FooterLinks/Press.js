import React from "react";
import { Link } from "react-router-dom";

const Press = () => {
  return (
    <div className="press-container">
      <header id="press">
        <h1>Press </h1>
      </header>
      <section id="section-a">
        <h5>
          <Link to="/shop">
            <a href="#" class="button">
              Back to Shopping
            </a>
          </Link>{" "}
          c
        </h5>
        <p>
          <h4 class="white-text center">Press</h4>
        </p>
      </section>
    </div>
  );
};

export default Press;
