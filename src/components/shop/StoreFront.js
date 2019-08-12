import React, { Component } from "react";
import Shoes from "./Shoes";

class StoreFront extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    var inventory = [
      { style: "Classic Black", price: 29.99 },
      { style: "Snake Skin Sneaker", price: 110.0 },
      { style: "Black & Green", price: 170.0 },
      { style: "Portland Classic", price: 79.0 }
    ];
    return <Shoes items={inventory} />;
  }
}

export default StoreFront;
