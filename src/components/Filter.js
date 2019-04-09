import React, { Component } from "react";
export default class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">{`${this.props.count} bikinis found.`}</div>
        <div className="col-md-4">
          <label>
            Order by
            <select
              className="form-control"
              value={this.props.sort}
              onChange={this.props.handleSortChange}
            >
              <option value="">Select</option>
              <option value="category">Tops</option>
              <option value="category">Bottoms</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}
