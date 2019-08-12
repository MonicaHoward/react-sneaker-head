import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";

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
        <Col className="shoe-card" sm="3">
          <Shoe
            name={item.style}
            price={item.price}
            key={i}
            cartTotal={this.cartTotal}
            active={item.active}
          />
        </Col>
      );
    });
    return (
      <div>
        <h1>Shoes</h1>
        <Container>
          <Row>{inventory}</Row>
        </Container>

        <div>total:{this.state.total}</div>
      </div>
    );
  }
}

export default Shoes;
