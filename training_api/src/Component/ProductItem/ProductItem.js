import React, { Component } from 'react';

class ProductItem extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        const {product,index} = this.props;
        let statusName = product.status ? 'Còn hàng' : 'Hết hàng';
        let statusClass = product.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index+1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                
                <span class={`label label-${statusClass}`}>{statusName}</span>
                
                </td>
                <td>
                
                <button type="button" class="btn btn-success">Sửa</button>
                
                <button type="button" class="btn btn-danger">Xóa</button>
                
                </td>
          </tr>
        );
    }
}

export default ProductItem;