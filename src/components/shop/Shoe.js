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
        {/* <Col sm="3">
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Add to Cart</Button>
          </Card>
        </Col> */}
        <p onClick={this.click}>
          {this.props.name} {this.props.price}
        </p>
      </div>
    );
  }
}

export default Shoe;
