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
import Filter from "./Filter";
import Cart from "./Cart";

const data = [{brand: "Zara",
name: "Black Floral Print", 
color: "Black",
url: zara1,
price: 15.99,
id: 1
},
{brand: "Zara",
name: "Velvet Brown Top", 
color: "Brown",
url: zara2,
price: 20.99,
id: 2
},
{brand: "Zara",
name: "Velvet Top with Knot", 
color: "Pink",
url: zara3,
price: 25.99,
id: 3
},
{brand: "Zara",
name: "Frill Top", 
color: "Black",
url: zara4,
price: 27.99,
id: 4
},
{brand: "H&M",
name: "Cropped Top", 
color: "Brown",
url: hm2,
price: 28.99,
id: 5
},
{brand: "H&M",
name: "Cotton Poplin Top", 
color: "Pink",
url: hm3,
price: 30.99,
id: 6
},
{brand: "H&M",
name: "Ribbed Puff-Sleeved Top", 
color: "Black",
url: hm1,
price: 32.99,
id: 7
},
{brand: "H&M",
name: "Draped Top", 
color: "Brown",
url: hm4,
price: 33.99,
id: 8
},
{brand: "Adika",
name: "Ribbed Hot Pink", 
color: "Pink",
url: adi3,
price: 35.99,
id: 9
},
{brand: "Adika",
name: "Semi Crop Sweater", 
color: "Black",
url: adi1,
price: 37.99,
id: 10
},
{brand: "Adika",
name: "Sienna Ruffle", 
color: "Brown",
url: adi2,
price: 38.99,
id: 11
},
{brand: "Adika",
name: "Contrast Straps", 
color: "Pink",
url: adi4,
price: 40.99,
id: 12
}]

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: data,
      sort: "",
      color:"",
      brand:"",
      cart: []
    }
  }

  //modify this
  sortProducts = (event) => {

    console.log(this.state.items.map(item => item.key))

    this.setState((state) => (
      {
        sort: event.target.value,
        items: this.state.items.slice().sort((a,b) => (
          event.target.value === "highest"?
          ((a.price < b.price)? 1:-1):
          event.target.value === "lowest"?
          ((a.price > b.price)? 1:-1):
          a.id > b.id ? 1:-1
        ))
      }
    ))

  }

  filterProductsColor = (event) => {
    if(event.target.value === ""){
      if(this.state.brand === ""){
        this.setState({color: event.target.value, items: data})
      }else{
        this.setState({color: event.target.value, items: data.filter(item => item.brand === this.state.brand)})
      }
    }else{
      if(this.state.brand === ""){
        this.setState({
          color: event.target.value,
          items: data.filter(item => item.color === event.target.value)
    
        })
      }else{
        this.setState({
          color: event.target.value,
          items: data.filter(item => (item.color === event.target.value && item.brand === this.state.brand))
    
        })
      }
    } 
  }

  filterProductsBrand = (event) => {
    if(event.target.value === ""){
      if(this.state.color === ""){
        this.setState({brand: event.target.value, items: data})
      }else{
        this.setState({brand: event.target.value, items: data.filter(item => item.color === this.state.color)})
      }     
    }else{
      if(this.state.color === ""){
        this.setState({
          brand: event.target.value,
          items: data.filter(item => item.brand === event.target.value)
    
        })
      }else{
        this.setState({
          brand: event.target.value,
          items: data.filter(item => (item.brand === event.target.value && item.color === this.state.color))
    
        })
      }
    }   
  }

  addToCart = (product) => {
    const cartItems = this.state.cart.slice();
    let alreadyInCart = false
    cartItems.forEach(item => {
      if(item.id === product.id){
        item.count++
        alreadyInCart = true
      }
    })
    if(!alreadyInCart){
      cartItems.push({...product, count: 1})
    }
    this.setState({cart: cartItems})
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cart.slice();
    this.setState({cart: cartItems.filter(item => item.id !== product.id)})
  }

  render() {
    return (
      <div>
<Filter
sort={this.state.sort}
color={this.state.color}
brand={this.state.brand}
filterProductsColor={this.filterProductsColor}
filterProductsBrand={this.filterProductsBrand}
sortProducts={this.sortProducts}
/>
<div style={{padding: 20}}>
  <div style={{width:"70%", float:"left"}}>
  <DisplayList addToCart={this.addToCart} items={this.state.items}></DisplayList>
  </div>
<div style={{width:"30%", float:"left"}}>
<Cart removeFromCart={this.removeFromCart} cartItems={this.state.cart}></Cart>
</div>
</div>
      </div>
    );
  }
}

export default App;
