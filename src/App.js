import React, { Component } from "react";
import "./App.css";

import MainNav from "./components/navs/MainNav";
import Header from "./components/header/Header";
import StoreFront from "./components/shop/StoreFront";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <MainNav />
        <Header />
        <StoreFront />
      </div>
    );
  }
}

export default App;
