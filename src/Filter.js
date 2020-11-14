import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <div style={{display: "flex", padding:1, margin:20, marginLeft:80, justifyContent: "center", border: "3px dotted #c4dfe6"}}>
                <div style={{margin:10, color: "white", fontFamily:"sans-serif"}}>{" "}
                Sort item <select value={this.props.sort} onChange={this.props.sortProducts}>
                    <option value="lowest">Lowest to Highest</option>
                    <option value="highest">Highest to Lowest</option>
                    </select></div>

                <div style={{margin:10, color: "white", fontFamily:"sans-serif"}}>Filter Items By Color {" "}
                <select value={this.props.color} onChange={this.props.filterProductsColor}>
                    <option value="">All</option>
                    <option value="Black">Black</option>
                    <option value="Brown">Brown</option>
                    <option value="Pink">Pink</option>
                </select>
                </div>

                <div style={{margin:10, color: "white", fontFamily:"sans-serif"}}>Filter Items By Brand {" "}
                <select value={this.props.brand} onChange={this.props.filterProductsBrand}>
                    <option value="">All</option>
                    <option value="Zara">Zara</option>
                    <option value="H&M">H&M</option>
                    <option value="Adika">Adika</option>
                </select>
                </div>
            </div>
        )
    }
}

export default Filter;