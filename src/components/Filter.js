import React, { Component } from "react";
// import { connect } from "react-redux";

export default class Filter extends Component {
  render() {
    // sortData = () => {
    //   const { storeProducts, category } = this.state;
    //   let tempProducts = [...storeProducts];
    //
    //   // filter by categeory
    //   if (category !== "top") {
    //     tempProducts = tempProducts.sort(item => item.category === category);
    //   }
    // };

    console.log(this.props);
    return (
      <div className="row">
        <div className="col-md-4">{`${this.props.count} bikinis found.`}</div>
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
