import React, {Component} from "react";
import './App.css';

//class to display components in Cart
class Cart extends Component {

    //function to display product cards in cart
    createItem = item => {
        return (
            <div key= {item.id} style= {{ backgroundColor:"#003b46", padding: 5, paddingLeft:10, margin:15}}>
                <img src={item.url} width={100} height={100} mode='fit'alt="Image of top" style={{display: "block", marginLeft: "auto", marginRight: "auto", paddingTop:10}}/>
                <p style={{color: "white", fontFamily:"sans-serif", textAlign: "center"}}>{item.name}</p>
                <div style={{display: "flex", flexDirection: "row"}}>
                    {/* display quantity and price */}
                    <p style={{color: "white", fontFamily:"sans-serif", marginRight:10}}>${item.price} x {item.count}</p>
                    <button style={{backgroundColor:"white", color: "#003b46", border: "3px #66a5ad solid", padding: 5, justifyContent: "center", borderRadius: 10, marginLeft:5, marginRight:5}} onClick={() => this.props.removeFromCart(item)}>Remove</button>
                </div>
            </div>     
        );
    };
    render(){
        const cartItems = this.props.cartItems
        const listItems = cartItems.map(this.createItem);
        let totalItems = 0;

        //calculate total items in cart
        for(const item of cartItems){
            totalItems += item.count
        }
        return(
            <div style={{marginRight: 15, backgroundColor: "#c4dfe6"}}>
                <p style={{border: "2px #66a5ad solid", textAlign: "center", padding:5, fontSize: 20, color: "#003b46", fontFamily:"sans-serif"}}>Shopping Cart ({totalItems})</p>
                <div className="cart" style={{display:"flex", flexDirection:"row", flexWrap: "wrap", justifyContent: "space-between", marginRight: 15, marginLeft: 15}}>
                {listItems}
                </div>

                {/* referenced: https://dev.to/yogesnsamy/how-to-use-the-reduce-method-in-javascript-and-react-5dhl */}
                {/* only display total and checkout if cart is not empty */}
                {cartItems.length !==0 && (
                    <div style={{display:"flex", justifyContent: "space-around", width: "100%", alignItems: "center", paddingBottom: 10}}>
                        <div style={{fontFamily:"sans-serif"}}>
                            Total: {" "}
                            {/* determine total price */}
                            {cartItems.reduce((a,c) => a + c.price * c.count, 0)}
                        </div>
                        <button style={{backgroundColor:"white", color: "#003b46", border: "3px #66a5ad solid", padding: 5, justifyContent: "center", borderRadius: 10, marginLeft:5, marginRight:5, fontSize:15}}>Checkout</button>
                    </div>
                    
                )}

                
            </div>
        )
    }
}

export default Cart;