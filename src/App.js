import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }

  componentDidMount() {
    this.getInv();
  }

  getInv = () => {
    axios.get("/api/inventory").then(res => {
      this.setState({
        inventory: res.data
      });
    });
  };

  deleteProd = prod_id => {
    console.log(prod_id);
    axios
      .delete(`/api/delete/${prod_id}`)
      .then(res => {
        console.log("It's been deleted boss");
      })
      .then(
        axios.get("/api/inventory").then(res => {
          this.setState({
            inventory: res.data
          });
        })
      );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} delete={this.deleteProd} />
        <Form get={this.getInv} />
      </div>
    );
  }
}

export default App;
