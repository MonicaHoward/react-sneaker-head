import React, { Component } from "react";

class Shoe extends Component {
  click() {
    var active = !this.state.active;
    this.setState({ active: active });
    this.props.cartTotal(active ? this.props.price : -this.props.price);
  }

  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
    this.click = this.click.bind(this);
  }

  render() {
    return (
      <div>
        <p onClick={this.click}>
          {this.props.name} {this.props.price}
        </p>
      </div>
    );
  }
}

export default Shoe;
