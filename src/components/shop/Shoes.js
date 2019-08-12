import React, { Component } from "react";

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
      return <h1>test</h1>;
    });
    return (
      <div>
        <h1>Shoes</h1>
      </div>
    );
  }
}

export default Shoes;
