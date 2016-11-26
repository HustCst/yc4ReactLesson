import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './Components/SearchBar.js';
import ProductTable from './Components/ProductTable.js';

var Appshow = React.createClass({
    getInitialState: function () {
        return {
            onlyShowStocked: false,
            filterText: ''
        }
    },
    changeShowStocked: function () {
        this.setState({
            onlyShowStocked: !this.state.onlyShowStocked
        });
    },
    changeFilterText: function (text) {
        this.setState({
            filterText: text
        })
    },
    render: function () {
        return (
            <div>
                <SearchBar changeFunc={this.changeShowStocked} changeText={this.changeFilterText}></SearchBar>
                <ProductTable products={this.props.products} onlyShowStocked={this.state.onlyShowStocked} filterText={this.state.filterText}></ProductTable>
            </div>
        )
    }
});

var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Baskettball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iWatch'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'iPad'},
];


ReactDom.render(
    <Appshow products={PRODUCTS}></Appshow>,
    document.getElementById('root')
);