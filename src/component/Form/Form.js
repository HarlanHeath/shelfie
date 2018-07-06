import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      imageurl: " ",
      prodName: " ",
      price: 0
    };
  }

  resetState() {
    this.setState({
      imageurl: " ",
      prodName: " ",
      price: 0
    });
  }

  urlInput(val) {
    this.setState({
      imageurl: val
    });
  }

  nameInput(val) {
    this.setState({
      prodName: val
    });
  }

  priceInput(val) {
    this.setState({
      price: val
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>Form</div>
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
        <button>Add to Inventory</button>
        <button onClick={e => this.resetState()}>Cancel</button>
      </div>
    );
  }
}
