import React, { Component } from "react";
import "../Form/form.css";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      imageurl: " ",
      prodName: " ",
      price: 0
    };

    this.resetState = this.resetState.bind(this);
    this.urlInput = this.urlInput.bind(this);
    this.nameInput = this.nameInput.bind(this);
    this.priceInput = this.priceInput.bind(this);
  }

  resetState = () => {
    this.setState({
      imageurl: " ",
      prodName: " ",
      price: 0
    });
  };

  urlInput = val => {
    this.setState({
      imageurl: val
    });
  };

  nameInput = val => {
    this.setState({
      prodName: val
    });
  };

  priceInput = val => {
    this.setState({
      price: val
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="form-field">
        <input
          placeholder="Image URL"
          onChange={e => this.urlInput(e.target.value)}
        />

        <input
          placeholder="Product Name"
          onChange={e => this.nameInput(e.target.value)}
        />
        <input
          placeHolder="Price"
          onChange={e => this.priceInput(e.target.value)}
        />
        <div className="button-contain">
          <button className="form-button" onClick={() => this.resetState()}>
            Cancel
          </button>
          <button className="form-button">Add to Inventory</button>
        </div>
      </div>
    );
  }
}
