import React, { Component } from "react";
import "./App.css";

import MainNav from "./components/navs/MainNav";
import StoreFront from "./components/shop/StoreFront";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <MainNav />
        <StoreFront />
      </div>
    );
  }
}

export default App;
