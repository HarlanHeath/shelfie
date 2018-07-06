import React, { Component } from "react";
import "./App.css";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [
        {
          name: "dog",
          price: 10,
          imageurl: "www.pic.com"
        },
        {
          name: "dog",
          price: 10,
          imageurl: "www.pic.com"
        },
        {
          name: "dog",
          price: 10,
          imageurl: "www.pic.com"
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form />
      </div>
    );
  }
}

export default App;
