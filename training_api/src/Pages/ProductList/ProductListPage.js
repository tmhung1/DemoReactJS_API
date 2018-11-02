import React, { Component } from 'react';
import ProductList from './../../Component/ProductList/ProductList';
import ProductItem from './../../Component/ProductItem/ProductItem';
import {connect} from 'react-redux';
class ProductListPage extends Component {
    render() {
       // const {products} = this.props;
       const products = [];
        return (
            <div>
                 <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button type="button" class="btn btn-info">Thêm sản phẩm</button>
                            <ProductList>
                                {this.showProductItem(products)}
                            </ProductList>
                 </div> 
            </div>
        );
    }
    showProductItem(products){
        let result = null;
        if(products.length>0)
        {
            result = products.map((item,index)=>{
                return (
                <ProductItem
                    key = {index}
                    product = {item}
                    index = {index}    
                />
                )
            })
        }
        return result;
    }
}
  const mapStateToProps = (state) =>{
      return {
         // products : state.product
      }
  }
  const mapDispatchToProps = (dispatch,props) =>{

  }
export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);