import React, {Component} from "react";
import './App.css';
import zara from "./images/zara.png"
import hm from "./images/h&m.png"
import adika from "./images/adika.png"

//class to display product cards
class DisplayList extends Component {

    //function to display one product card
    createItem = item => {
        return (
            //display item properties
            <div key= {item.id} style= {{ backgroundColor:"white", padding: 5, paddingLeft:10, paddingRight:10, margin:15, width: 300, borderRadius: 25}}>
                <img src={item.url} width={300} height={300} mode='fit'alt="Image of top" style={{display: "block", marginLeft: "auto", marginRight: "auto"}}/>
                <p style={{fontFamily: "sans-serif", textAlign: "center", fontSize: 25}}>{item.name}</p>
                <p style={{fontFamily: "sans-serif", textAlign: "center", fontSize: 20}}>${item.price}</p>

                    {/* display logo of brand */}
                    <div>
                    {item.brand === "Zara" && (<img src={zara} width={64} height={32} style={{display: "block", marginLeft: "auto", marginRight: "auto"}}></img>)}
                {item.brand === "H&M" && (<img src={hm} width={78} height={32} style={{display: "block", marginLeft: "auto", marginRight: "auto"}}></img>)}
                {item.brand === "Adika" && (<img src={adika} width={64} height={32} style={{display: "block", marginLeft: "auto", marginRight: "auto"}}></img>)}
                    </div>

                    {/* Color coded text */}
                    <div>
                        {item.color === "Black" && (<p style={{color: "black", textAlign: "center", fontSize:18}}> <b>{item.color} Color</b></p>)}
                        {item.color === "Brown" && (<p style={{color: "brown", textAlign: "center" , fontSize:18}}> <b>{item.color} Color</b></p>)}
                        {item.color === "Pink" && (<p style={{color: "magenta", textAlign: "center", fontSize:18}}> <b>{item.color} Color</b></p>)}
                    </div>

                <button style={{backgroundColor:"white", border: "3px #003b46 solid", padding: 5, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 10, marginLeft:100, marginBottom: 10, fontSize: 15}} onClick={() => this.props.addToCart(item)}>Add to Cart</button>
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