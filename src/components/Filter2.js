import React, { Component } from "react";
// import { connect } from "react-redux";
// import ItemsData from "./ItemsData";

export default class Filter extends Component {
  render() {
    // sortData = () => {
    //   const { ItemsData, category } = this.state;
    //   let Categories = [...ItemsData];
    // };

    // filter by categeory
    // changeHandler = e => {
    //   if (this.props.value.category !== "top") {
    //     let categories = categories.sort(item => item.value === category);
    //   }
    // };

    // changeHandler = e => {
    //   let items = [...this.props.items].filter(item =>
    //     item.category.toLowerCase().includes(e.target.value.toLowerCase())
    //   );
    //   this.setState({
    //     filteredArray: items,
    //     searchTerm: e.target.value
    //   });
    // };

    // console.log(this. props);
    return (
      <div className="row">
        <div className="col-md-4">{`${
          this.props.value.length
        } bikinis found.`}</div>
        <div className="col-md-4">
          <label>
            Order by
            <select
              className="form-control"
              value={this.props.sort}
              changeHandler={this.props.changeHandler}
            >
              <option value="">Select</option>
              <option value="category.top">Tops</option>
              <option value="category.bottom">Bottoms</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}
