import React from 'react';
import ProductCategory from './ProductCategory.js';
import ProductRow from './ProductRow.js';

var ProductTable = React.createClass({
    render: function () {
        var products = this.props.products;
        var onlyShowStocked = this.props.onlyShowStocked;
        var filterText = this.props.filterText;
        var row = [];
        var lastCategory = '';
        products.forEach(function (ele, index) {
            if (lastCategory != ele.category) {
                lastCategory = ele.category;
                row.push(<ProductCategory key={index} category={ele.category}></ProductCategory>)
            }
            if ( !(onlyShowStocked && !ele.stocked) ) {
                if (ele.name.indexOf(filterText) !== -1) {
                    row.push(<ProductRow key={index + 100} name={ele.name} price={ele.price} stocked={ele.stocked}></ProductRow>);
                }
            }
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        )
    }
});
export default ProductTable;