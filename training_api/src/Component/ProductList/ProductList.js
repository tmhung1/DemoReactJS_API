import React, { Component } from 'react';
import ProductItem from './../ProductItem/ProductItem';
class ProductList extends Component {
  constructor(props)
  {
    super(props);
  }
    render() {
        return (
                 <div class="panel panel-primary">
                      <div class="panel-heading">
                        <h3 class="panel-title">Danh sách sản phẩm</h3>
                      </div>
                      <div class="panel-body">
                        <table class="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>STT</th>
                              <th>Mã</th>
                              <th>Tên</th>
                              <th>Giá</th>
                              <th>Trạng thái</th>
                              <th>Hành động</th>
                            </tr>
                          </thead>
                          <tbody>
                               {this.props.children}
                          </tbody>
                        </table>
                        
                      </div>
                  </div>
        );
    }
}

export default ProductList;