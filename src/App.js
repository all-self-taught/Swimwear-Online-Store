import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Contact from "./FooterLinks/Contact";
import Story from "./FooterLinks/Story";
import Press from "./FooterLinks/Press";
import Testimonial from "./components/Testimonial";

// import Css from "./App.css";
import Footer from "./components/Footer";
// import Filter from "./components/Filter";
// import Signup from "./components/Signup";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      items: [],
      filteredItems: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/items")
      .then(res => res.json())
      // .then(console.log);
      .then(items => this.setState({ items: items, filteredItems: items }));
  }

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
