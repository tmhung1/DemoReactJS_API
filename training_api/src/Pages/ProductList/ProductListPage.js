import React, { Component } from 'react';
import ProductList from './../../Component/ProductList/ProductList';
import ProductItem from './../../Component/ProductItem/ProductItem';
import {connect} from 'react-redux';
import callApi from './../../utils/apiCaler';
import {Link} from 'react-router-dom';
import * as action from './../../Action/index';
class ProductListPage extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            products : []
        }
    }
    componentDidMount(){
        /* callApi('product' , 'GET' , null).then(res => {
            this.props.fetchProduct(res.data);
        }); */
        this.props.fetchProduct();
    }
    onDelete = (id) =>{
        this.props.onDeleteProduct(id);
        /* callApi(`product/${id}` , 'DELETE' , null).then(res => {
        let {products} = this.state;
        if(res.status === 200)
        {
            let index = this.findIndex(products,id);
            if(index !== -1)
            {
                products.splice(index,1);
                this.setState({
                    products : products
                });
            }
        }
        }); */
    }
    findIndex = (products,id) =>{
        let result = -1;
        products.forEach((product,index)=>{
            if(product.id === id) 
            result = index;
        })
        return result;
    }
    render() {
       const {products} = this.props;
        return (
            <div>
                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <Link to={"product/add"} className="btn btn-info">Thêm sản phẩm</Link>
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
                    onDelete = {this.onDelete} 
                />
                )
            })
        }
        return result;
    }
}
  const mapStateToProps = (state) =>{
      return {
          products : state.product
      }
  }
  const mapDispatchToProps = (dispatch,props) =>{
    return {
        fetchProduct : () =>{
            dispatch(action.fetchProductRequest());
        },
        onDeleteProduct : (id)=>{
            dispatch(action.deleteProductRequest(id));
        }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);