import React, { Component } from 'react';
import callApi from './../../utils/apiCaler';
import {Link} from 'react-router-dom';
import *as action from './../../Action/index';
import {connect} from 'react-redux';
class ProductActionPage extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            id : "",
            txtName : "",
            txtStatus : false,
            txtPrice : 0
        }
    }
    onChange = (e)=>{
        let target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }
    onSubmit = (e) =>{
        e.preventDefault();
        const {id,txtName,txtPrice,txtStatus} = this.state;
        let {history} = this.props;
        let product = {
            id : id,
            name : txtName,
            price : txtPrice,
            status : txtStatus
        }
        if(id)
        {
             this.props.onUpdateProduct(product);
             
        }else{
            this.props.onAddProduct(product);
          
        }
        history.goBack();
       
    }
    componentDidMount(){
        let {match} = this.props;
        if(match)
        {
                let id = match.params.id;
                this.props.onGetProductDetail(id);
               
            
        }
    }
    componentWillReceiveProps(nextProps)
    {
        if(nextProps && nextProps.editProduct)
        {
            const {editProduct} = nextProps;
           
                 this.setState({
                    id : editProduct.id,
                    txtName : editProduct.name,
                    txtPrice : editProduct.price,
                    txtStatus : editProduct.status
                }); 
        }
    }
    render() {
        const {txtName,txtPrice,txtStatus} = this.state;
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Tên sản phẩm : </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Input name"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Giá sản phẩm : </label>
                        <input 
                            type="number" 
                            className="form-control" 
                            placeholder="Input price"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}/>
                    </div>
                    
                    <div className="checkbox">
                        <label>
                            <input 
                                checked={txtStatus}
                                type="checkbox" 
                                value={this.txtStatus}
                                name="txtStatus"
                                onChange={this.onChange}/>
                            Còn hàng
                        </label>
                    </div>
                    <Link to={'/product-list'} className="btn btn-danger">Quay lại</Link>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
                
            </div> 
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        editProduct : state.editProduct
    }   
}
const mapDispatchToProps = (dispatch,props) =>{
  return {
      onAddProduct : (product)=>{
          dispatch(action.addProductRequest(product));
      },
      onGetProductDetail : (id)=>{
          dispatch(action.getProductDetailRequest(id));
      },
      onUpdateProduct : (product)=>{
          dispatch(action.updateProductRequest(product));
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);