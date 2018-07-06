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

  componentDidMount() {
    axios.get("/api/products").then(res => {
      this.setState({
        products: res.data
      });
    });
  }

  render() {
    console.log(this.props.inventory);
    return (
      <div>
        <div>Dashboard</div>
        <Product />
      </div>
    );
  }
}
