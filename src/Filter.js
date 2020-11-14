import React, { Component } from 'react';
import './App.css';

//class to filter and sort
class Filter extends Component {

    render() {
        return (
            <div className="filter">
                {/* sort products dropdown */}
                <div className="dropdown">{" "}
                Sort item <select value={this.props.sort} onChange={this.props.sortProducts}>
                    <option value="">Select</option>
                    <option value="lowest">Lowest to Highest</option>
                    <option value="highest">Highest to Lowest</option>
                    </select></div>

                {/* filter products by color dropdown */}
                <div className="dropdown">Filter Items By Color {" "}
                <select value={this.props.color} onChange={this.props.filterProductsColor}>
                    <option value="">All</option>
                    <option value="Black">Black</option>
                    <option value="Brown">Brown</option>
                    <option value="Pink">Pink</option>
                </select>
                </div>

                {/* filter products by brand dropdown */}
                <div className="dropdown">Filter Items By Brand {" "}
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