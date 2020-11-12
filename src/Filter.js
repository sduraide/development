import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <div className="filter" style={{display: "flex", padding:1, margin:5, justifyContent: "center", border: "3px dotted #aaf0d1"}}>
                <div className="filter-sort" style={{margin:10}}>{" "}
                Sort item <select value={this.props.sort} onChange={this.props.sortProducts}>
                    <option value="lowest">Lowest to Highest</option>
                    <option value="highest">Highest to Lowest</option>
                    </select></div>

                <div className="filter-color" style={{margin:10}}>Filter Items By Color 
                <select value={this.props.color} onChange={this.props.filterProductsColor}>
                    <option value="">All</option>
                    <option value="Black">Black</option>
                    <option value="Brown">Brown</option>
                    <option value="Pink">Pink</option>
                </select>
                </div>

                <div className="filter-brand" style={{margin:10}}>Filter Items By Brand
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