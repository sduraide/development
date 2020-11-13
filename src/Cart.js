import React, {Component} from "react";
import './App.css';

class Cart extends Component {
    createItem = item => {
        return (
            <div key= {item.id} style= {{ backgroundColor:"#003b46", padding: 5, paddingLeft:10, margin:15}}>
                <img src={item.url} width={100} height={100} mode='fit'alt="Image of top" style={{display: "block", marginLeft: "auto", marginRight: "auto", paddingTop:10}}/>
                <p style={{color: "white", fontFamily:"sans-serif", textAlign: "center"}}>{item.name}</p>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <p style={{color: "white", fontFamily:"sans-serif", marginRight:10}}>${item.price} x {item.count}</p>
                    <button style={{backgroundColor:"white", color: "#003b46", border: "3px #66a5ad solid", padding: 5, justifyContent: "center", borderRadius: 10, marginLeft:5, marginRight:5}} onClick={() => this.props.removeFromCart(item)}>Remove</button>
                </div>
            </div>     
        );
    };
    render(){
        const cartItems = this.props.cartItems
        const listItems = cartItems.map(this.createItem);
        return(
            <div style={{marginRight: 15, backgroundColor: "#c4dfe6"}}>
                <p style={{border: "2px #66a5ad solid", textAlign: "center", padding:5}}>Shopping Cart</p>
                <div className="cart" style={{display:"flex", flexDirection:"row", flexWrap: "wrap", justifyContent: "space-between", marginRight: 15, marginLeft: 15}}>
                {listItems}
                </div>

                {cartItems.length !==0 && (
                    <div style={{display:"flex", justifyContent: "space-around", width: "100%", alignItems: "center", paddingBottom: 10}}>
                        <div>
                            Total: {" "}
                            {cartItems.reduce((a,c) => a + c.price * c.count, 0)}
                        </div>
                        <button>Checkout</button>
                    </div>
                    
                )}

                
            </div>
        )
    }
}

export default Cart;