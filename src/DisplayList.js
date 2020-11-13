import React, {Component} from "react";
import './App.css';

class DisplayList extends Component {
    createItem = item => {
        return (
            <div key= {item.id} style= {{ backgroundColor:"#a1d6e2", padding: 5, paddingLeft:10, paddingRight:10, margin:15, width: 250}}>
                <p>Name: {item.name}</p>
                <p>Brand: {item.brand}</p>
                <p>Color: {item.color}</p>
                <p>Price: ${item.price}</p>
                <img src={item.url} width={200} height={200} mode='fit'alt="Image of top"/>
                <button onClick={() => this.props.addToCart(item)}>Add to Cart</button>

            </div>     
        );
    };
    render() {
        const dresses = this.props.items;
        const listItems = dresses.map(this.createItem);
        return <div style={{display:"flex", flexDirection:"row", flexWrap: "wrap"}}>{listItems}</div>;
    }
}

export default DisplayList;