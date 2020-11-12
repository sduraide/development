import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <div className="filter" style={{display: "flex", padding:1, margin:5, justifyContent: "space-between", borderBottom: "0.1rem #c0c0c0 solid"}}>
                <div className="filter-sort">{" "}
                Order <select value={this.props.sort} onChange={this.props.sortProducts}>
                    <option value="lowest">Lowest to Highest</option>
                    <option value="highest">Highest to Lowest</option>
                    </select></div>
                <div className="filter-color">Filter By Color
                <select value={this.props.color} onChange={this.props.filterProductsColor}>
                    <option value="">All</option>
                    <option value="Black">Black</option>
                    <option value="Brown">Brown</option>
                    <option value="Pink">Pink</option>
                </select>
                </div>
            </div>
        )
    }
}

export default Filter;