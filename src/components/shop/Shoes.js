import React, { Component } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Button,
  CardFooter,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";

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
          <Card className="imgClass">
            <CardBody>
              <CardTitle>
                <strong>{item.style}</strong>
              </CardTitle>

              {/* <CardFooter className="bg"> */}
              <Button className="justify-content-end">Add to Cart</Button>
              {/* </CardFooter> */}
            </CardBody>
          </Card>
          {/* <Shoe
            name={item.style}
            price={item.price}
            key={i}
            cartTotal={this.cartTotal}
            active={item.active}
          />
          <Button color="secondary">secondary</Button> */}
        </Col>
      );
    });
    return (
      <div>
        <h1>Shoes</h1>
        <Container>
          <Row>
            <CardDeck>{inventory}</CardDeck>
          </Row>
        </Container>

        <div>total:{this.state.total}</div>
      </div>
    );
  }
}

export default Shoes;