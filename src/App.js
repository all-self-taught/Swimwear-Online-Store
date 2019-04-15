import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Css from "./App.css";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
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
  changeHandler = e => {
    let items = [...this.state.items].filter(item =>
      item.category.toLowerCase().includes("top"())
    );
    this.setState({
      filterItems: items,
      searchTerm: e.target.value
    });
  };

  applyFilter(category) {
    this.setState({
      ...this.state,
      itemsToFilter: category
    });
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
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
