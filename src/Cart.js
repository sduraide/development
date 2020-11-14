import React, {Component} from "react";
import './App.css';

//class to display components in Cart
class Cart extends Component {

    //function to display product cards in cart
    createItem = item => {
        return (
            <div key= {item.id} className="cart-item">
                <img src={item.url} width={100} height={100} mode='fit'alt="Image of top" className="cart-image"/>
                <p className="cart-name">{item.name}</p>
                <div className="card-bottom">
                    {/* display quantity and price */}
                    <p className="cart-price">${item.price} x {item.count}</p>
                    <button className="cart-button" onClick={() => this.props.removeFromCart(item)}>Remove</button>
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
            <div className="shopping-cart">
                <p className="cart-title">Shopping Cart ({totalItems})</p>
                <div className="cart">
                {listItems}
                </div>

                {/* referenced: https://dev.to/yogesnsamy/how-to-use-the-reduce-method-in-javascript-and-react-5dhl */}
                {/* only display total and checkout if cart is not empty */}
                {cartItems.length !==0 && (
                    <div className="checkout">
                        <div style={{fontFamily:"sans-serif"}}>
                            Total: {" "}
                            {/* determine total price */}
                            {cartItems.reduce((a,c) => a + c.price * c.count, 0)}
                        </div>
                        <button className="cart-button">Checkout</button>
                    </div>
                    
                )}

                
            </div>
        )
    }
}

export default Cart;