import React from "react";
import { Link } from "react-router-dom";

const Press = () => {
  return (
    <div className="press-container">
      <header id="press">
        <h1>Press </h1>
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
          <h4 class="white-text center">Press</h4>
        </p>
      </section>
    </div>
  );
};

export default Press;
