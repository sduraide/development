import React, { Component } from "react";
import "./App.css";
import zara from "./images/zara.png";
import hm from "./images/h&m.png";
import adika from "./images/adika.png";

//class to display product cards
class DisplayList extends Component {
  //function to display one product card
  createItem = (item) => {
    return (
      //display item properties
      <div key={item.id} className="product">
        <img
          className="product-image"
          src={item.url}
          width={300}
          height={300}
          mode="fit"
          alt="Top"
        />
        <p className="product-name">{item.name}</p>
        <p className="product-price">${item.price}</p>

        {/* display logo of brand */}
        <div>
          {item.brand === "Zara" && (
            <img className="logo" src={zara} width={64} height={32} alt="brand"></img>
          )}
          {item.brand === "H&M" && (
            <img className="logo" src={hm} width={78} height={32} alt="brand"></img>
          )}
          {item.brand === "Adika" && (
            <img className="logo" src={adika} width={64} height={32} alt="brand"></img>
          )}
        </div>

        {/* Color coded text */}
        <div>
          {item.color === "Black" && (
            <p className="black-color">
              {" "}
              <b>{item.color} Color</b>
            </p>
          )}
          {item.color === "Brown" && (
            <p className="brown-color">
              {" "}
              <b>{item.color} Color</b>
            </p>
          )}
          {item.color === "Pink" && (
            <p className="pink-color">
              {" "}
              <b>{item.color} Color</b>
            </p>
          )}
        </div>

        <button className="add-to-cart" onClick={() => this.props.addToCart(item)}>Add to Cart</button>
      </div>
    );
  };

  render() {
    const dresses = this.props.items;
    const listItems = dresses.map(this.createItem);
    return <div class="products">{listItems}</div>;
  }
}

export default DisplayList;
