import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import Filter from "./Filter";

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      sort: "",
      items: [],
      filteredProducts: []
    };
  }
  listProducts = () => {
    this.setState(state => {
      if (state.sort !== "") {
        state.items.sort((a, b) => (a.category > b.category ? 1 : -1));
      }
      return { filteredProducts: state.items };
    });
  };
  handleSortChange = e => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  };
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <div class="row">
          <div class="col s12 m6">
            <div className="card" key={item.id}>
              <div className="card-image">
                <img src={item.img} />
                <span
                  to="/"
                  className="btn-floating halfway-fab waves-effect waves-light #000000 black"
                  onClick={() => {
                    this.handleClick(item.id);
                  }}
                >
                  <i className="material-icons">shopping_basket</i>
                </span>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  {item.title}
                  <div>${item.price}</div>
                  <i class="material-icons right">more_horiz</i>
                </span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  {item.title}
                  <i class="material-icons left">close</i>
                </span>
                <p>
                  <div className="card-content">
                    <p>{item.desc}</p>
                    <p>Size: {item.size}</p>
                    <p>
                      <b>${item.price}</b>{" "}
                    </p>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <Filter
          count={this.state.filteredProducts.length}
          handleSortChange={this.handleSortChange}
        />
        <h3 className="center">swimwear</h3>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
