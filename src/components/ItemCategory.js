import React, { Component } from "react";
import { items } from "./reducers/cartReducer";
import Filter from "./Filter";

class ItemCategory extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      filteredItems: []
    };
  }

  componentWillMount() {
    this.setState({
      items,
      filteredItems: items
    });
  }

  filterItems = itemFilter => {
    let filteredItems = this.state.items;
    filteredItems = filteredItems.filter(item => {
      let itemCategory =
        item.firstName.toLowerCase() + item.lastName.toLowerCase();
      return itemCategory.indexOf(itemFilter.toLowerCase()) !== -1;
    });
    this.setState({
      filteredItems
    });
  };

  render() {
    return (
      <items
        items={this.state.filteredItems}
        match={this.props.match}
        onChange={this.filterItems}
      />
    );
  }
}

export default ItemCategory;
