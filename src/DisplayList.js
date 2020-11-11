import React, {Component} from "react";

class DisplayList extends Component {
    createItem = item => {
        console.log(item)
        return (
            <div style= {{ backgroundColor:"#aaf0d1", padding: 5, paddingLeft:10, margin:15, width: 250}}>
                <p>Name: {item.name}</p>
                <p>Brand: {item.brand}</p>
                <p>Color: {item.color}</p>
                <p>Price: ${item.price}</p>
                <img src={item.url} width={200} height={200} mode='fit'/>

            </div>     
        );
    };
    render() {
        const dresses = this.props.items;
        const listItems = dresses.map(this.createItem);
        return <div style={{display:"flex", flexDirection:"row"}}>{listItems}</div>;
    }
}

export default DisplayList;