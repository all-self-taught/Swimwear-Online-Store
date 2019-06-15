import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Contact from "./components/FooterLinks/Contact";
import Story from "./components/FooterLinks/Story";
import Press from "./components/FooterLinks/Press";
import Testimonial from "./components/Testimonial";

// import Css from "./App.css";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/shop" component={Shop} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact" component={Contact} />
            <Route path="/story" component={Story} />
            <Route path="/press" component={Press} />
            <Route path="/testimonial" component={Testimonial} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
