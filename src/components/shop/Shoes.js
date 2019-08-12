import React, { Component } from "react";
import Shoe from "./Shoe";

class Shoes extends Component {
  cartTotal(price) {
    this.setState({ total: this.state.total + price });
  }
  constructor(props) {
    super(props);

    this.state = {
      total: 0
    };
    this.cartTotal = this.cartTotal.bind(this);
  }

  render() {
    console.log(this.props.items);
    var inventory = this.props.items.map((item, i) => {
      return (
        <Shoe
          name={item.style}
          price={item.price}
          key={i}
          cartTotal={this.cartTotal}
          active={item.active}
        />
      );
    });
    return (
      <div>
        <h1>Shoes</h1>
        <div>{inventory}</div>

        <div>total:{this.state.total}</div>
      </div>
    );
  }
}

export default Shoes;
