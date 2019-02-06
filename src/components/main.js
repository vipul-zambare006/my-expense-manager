import React, { Component } from "react";
import Navbar from "./navbar";
class Main extends Component {
  state = {};
  render() {
    return (
      <div>
         <Navbar />
         <h4>This is main page</h4>
      </div>
    );
  }
}

export default Main;
