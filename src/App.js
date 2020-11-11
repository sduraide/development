import React, {Component} from "react";
import DisplayList from './DisplayList'
import './App.css';

import zara3 from "./images/zara3.jpg"
import zara1 from "./images/zara1.webp"
import zara2 from "./images/zara2.webp"
import zara4 from "./images/zara4.webp"

import hm1 from "./images/hm1.jpeg"
import hm2 from "./images/hm2.jpeg"
import hm3 from "./images/hm3.jpeg"
import hm4 from "./images/hm4.jpeg"

import adi1 from "./images/adi1.webp"
import adi2 from "./images/adi2.jpeg"
import adi3 from "./images/adi3.jpeg"
import adi4 from "./images/adi4.webp"

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [
        {brand: "Zara",
        name: "Black Floral Print", 
        color: "Black",
        url: zara1,
        price: 15.99
        },
        {brand: "Zara",
        name: "Velvet Brown Top", 
        color: "Brown",
        url: zara2,
        price: 20.99
        },
        {brand: "Zara",
        name: "Velvet Top with Knot", 
        color: "Pink",
        url: zara3,
        price: 25.99
        },
        {brand: "Zara",
        name: "Frill Top", 
        color: "Black",
        url: zara4,
        price: 27.99
        },
        {brand: "H&M",
        name: "Cropped Top", 
        color: "Brown",
        url: hm2,
        price: 28.99
        },
        {brand: "H&M",
        name: "Cotton Poplin Top", 
        color: "Pink",
        url: hm3,
        price: 30.99
        },
        {brand: "H&M",
        name: "Ribbed Puff-Sleeved Top", 
        color: "Black",
        url: hm1,
        price: 32.99
        },
        {brand: "H&M",
        name: "Draped Top", 
        color: "Brown",
        url: hm4,
        price: 33.99
        },
        {brand: "Adika",
        name: "Ribbed Hot Pink", 
        color: "Pink",
        url: adi3,
        price: 35.99
        },
        {brand: "Adika",
        name: "Semi Crop Sweater", 
        color: "Black",
        url: adi1,
        price: 37.99
        },
        {brand: "Adika",
        name: "Sienna Ruffle", 
        color: "Brown",
        url: adi2,
        price: 38.99
        },
        {brand: "Adika",
        name: "Contrast Straps", 
        color: "Pink",
        url: adi4,
        price: 40.99
        },
      ]
    }
  }

  render() {
    return (
      <DisplayList items={this.state.items}></DisplayList>
    );
  }
}

export default App;
