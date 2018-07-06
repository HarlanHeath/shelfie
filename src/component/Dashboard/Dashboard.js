import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  // componentDidMount() {
  //   axios.get("/api/products").then(res => {
  //     this.setState({
  //       products: res.data
  //     });
  //   });
  // }

  render() {
    // console.log(this.props.inventory);
    let prodinv = this.props.inventory.map((product, id) => {
      // console.log(product);
      return (
        <div className="prod-contain" key={id}>
          <p>{product.imageurl}</p>
          <p>{product.name}</p>
          <p>{product.price}</p> )
        </div>
      );
      return <Product />;
    });

    return (
      <div>
        <div>{prodinv}</div>
      </div>
    );
  }
}
