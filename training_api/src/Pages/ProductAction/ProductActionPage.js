import React, { Component } from 'react';

class ProductActionPage extends Component {
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <form>
                    <div className="form-group">
                        <label>Tên sản phẩm : </label>
                        <input type="text" className="form-control" placeholder="Input name"/>
                    </div>
                    <div className="form-group">
                        <label>Giá sản phẩm : </label>
                        <input type="number" className="form-control" placeholder="Input price"/>
                    </div>
                    
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value=""/>
                            Còn hàng
                        </label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>
                
            </div> 
        );
    }
}

export default ProductActionPage;