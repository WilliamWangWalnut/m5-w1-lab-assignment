import "./App.css";
import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CartItems: [
        {
          id: 1,
          image: "./products/cologne.jpg",
          desc: "Unisex Cologne",
          value: 0,
        },
        {
          id: 2,
          image: "./products/iwatch.jpg",
          desc: "Apple iWatch",
          value: 0,
        },
        {
          id: 3,
          image: "./products/mug.jpg",
          desc: "Unique Mug",
          value: 0,
        },
        {
          id: 4,
          image: "./products/wallet.jpg",
          desc: "Mens Wallet",
          value: 0,
        },
      ],
    };
  }

  render() {
    const Quantity = this.state.CartItems.map((quantity) => {
      return quantity.value;
    });
    let totalQuantity = 0;
    for (let i = 0; i < Quantity.length; i++) {
      totalQuantity += Quantity[i];
    }
    Quantity.reduce((totalQuantity, Quantity) => totalQuantity + Quantity, 0);

    let shoppingItem = <Shopping shoppinglists={this.state.CartItems} />;

    return (
      <div className="App">
        <div id="title">
          <h1>Shop to React</h1>
          <div id="total-items">
            <FontAwesomeIcon icon={faShoppingCart} />
            <div id="total-value"> {totalQuantity} </div>
            items
          </div>
        </div>
        {shoppingItem}
      </div>
    );
  }
}

function Shopping(props) {
  return (
    <ListGroup>
      {props.shoppinglists.map((shoppinglist) => (
        <ListGroupItem key={shoppinglist.id}>
          <h5>{shoppinglist.desc}</h5>
          <img alt="img" src={shoppinglist.image} />
          <span>{shoppinglist.value}</span>
          quantity
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default App;
