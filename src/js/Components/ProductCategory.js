import React from 'react';
var ProductCategory = React.createClass({
    render: function () {
        return (
            <tr><th>{this.props.category}</th></tr>
        )
    }
});

export default ProductCategory;