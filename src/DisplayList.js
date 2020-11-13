import React, {Component} from "react";
import './App.css';
import zara from "./images/zara.png"
import hm from "./images/h&m.jpeg"
import adika from "./images/adika.png"

class DisplayList extends Component {
    createItem = item => {
        return (
            <div key= {item.id} style= {{ backgroundColor:"white", padding: 5, paddingLeft:10, paddingRight:10, margin:15, width: 250, borderRadius: 25}}>
                <p style={{fontFamily: "sans-serif", textAlign: "center"}}>{item.name}</p>
                <p style={{fontFamily: "sans-serif", textAlign: "center"}}>${item.price}</p>
                <img src={item.url} width={200} height={200} mode='fit'alt="Image of top" style={{display: "block", marginLeft: "auto", marginRight: "auto", marginBottom:15}}/>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    <div>
                    {item.brand === "Zara" && (<img src={zara} width={64} height={64} style={{margin: 10}}></img>)}
                {item.brand === "H&M" && (<img src={hm} width={64} height={64}></img>)}
                {item.brand === "Adika" && (<img src={adika} width={64} height={64}></img>)}
                    </div>
                    <div>
                        {item.color === "Black" && (<p style={{color: "black", paddingTop: 15}}> <b>{item.color}</b></p>)}
                        {item.color === "Brown" && (<p style={{color: "brown", paddingTop: 15}}> <b>{item.color}</b></p>)}
                        {item.color === "Pink" && (<p style={{color: "pink", paddingTop: 15}}> <b>{item.color}</b></p>)}
                    </div>
                </div>
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