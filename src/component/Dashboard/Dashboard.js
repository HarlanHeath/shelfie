import React, { Component } from "react";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  render() {
    console.log(this.props);
    let prodinv = this.props.inventory.map((product, index) => {
      console.log(product);

      return (
        <div className="prod-contain" key={index}>
          <p>{product.imageurl}</p>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button onClick={() => this.props.delete(product.prod_id)}>
            Delete Product
          </button>
        </div>
      );
    });

    return (
      <div>
        <div>{prodinv}</div>
      </div>
    );
  }
}
