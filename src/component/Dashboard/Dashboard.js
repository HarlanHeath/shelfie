import React, { Component } from "react";
import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  deleteprod(e) {
    axios.delete(`/api/delete/${e}`);
  }

  render() {
    let prodinv = this.props.inventory.map((product, prod_id) => {
      return (
        <div className="prod-contain" key={prod_id}>
          <p>{product.imageurl}</p>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button onClick={e => this.deleteprod(e.prod_id)}>
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
