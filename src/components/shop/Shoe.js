import React, { Component } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

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
        {/* <Col sm="3"> */}
        <Card className="shoe-img">
          <CardTitle>{this.props.name}</CardTitle>
          <img
            className="shoe-img"
            src={this.props.img}
            alt="black white and gold kyrie irving air max shoe"
          />
          <Button
            className="price-button"
            color="primary"
            size="lg"
            block
            onClick={this.click}
          >
            {this.props.price}
          </Button>
        </Card>

        {/* </Col> */}
        {/* <p onClick={this.click}>
          {this.props.name} {this.props.price}
        </p>
        <Button onClick={this.click} className="justify-content-end">
          Add to Cart
        </Button> */}
      </div>
    );
  }
}

export default Shoe;
