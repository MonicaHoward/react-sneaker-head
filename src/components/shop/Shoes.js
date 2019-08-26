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
  CardGroup,
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
          {/* <Card className="imgClass">
            <CardBody>
              <CardTitle>
                <strong>{item.style}</strong>
              </CardTitle>

              <CardFooter className="bg">
              <Button
                onClick={this.props.click}
                className="justify-content-end"
              >
                Add to Cart
              </Button>
              </CardFooter>
            </CardBody>
          </Card> */}
          <Shoe
            name={item.style}
            price={item.price}
            img={item.img}
            key={i}
            cartTotal={this.cartTotal}
            active={item.active}
          />
        </Col>
      );
    });
    return (
      <div>
        <h1 className="shoes-title">New Releases</h1>
        <Container>
          <Row>
            <CardDeck>{inventory}</CardDeck>
          </Row>
        </Container>
        <div className="container">
          <div className="row total-box">
            <div className="col-md-6">
              <div>{this.state.name}</div>
            </div>
            <div className="col-md-6 ">
              <div className="total">total: ${this.state.total}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shoes;
