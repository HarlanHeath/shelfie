import React, { Component } from "react";
// import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  // deleteProd = prod_id => {
  //   axios.delete(`/api/delete/${prod_id}`).then(res => {
  //     console.log("It's been deleted boss");
  //   });
  // };

  render() {
    console.log(this.props);
    let prodinv = this.props.inventory.map((product, index) => {
      console.log(product);
      // console.log(prod_id);
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
