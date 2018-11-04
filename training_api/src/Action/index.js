import * as Types from './../Contants/ActionTypes';
import callApi from './../utils/apiCaler';
export const fetchProductRequest = ()=>{
    return (dispatch)=>{
        return callApi('product','GET',null).then(res=>{
            dispatch(fetchProduct(res.data))
        });
    }
}
export const fetchProduct = (products) =>{
    return {
        type : Types.LIST_ALL,
        products
    }
   
};

export const deleteProductRequest = (id)=>{
    return (dispatch) =>{
        return callApi(`product/${id}`,'DELETE',null).then(res=>{
            dispatch(deleteProduct(id))
        });
    }
}
export const deleteProduct = (id) =>{
    return {
        type : Types.DELETE_PRODUCT,
        id
    }
}

export const addProductRequest = (products)=>{
    return (dispatch) =>{
        return callApi('product','POST',products).then(res=>{
            dispatch(addProduct(res.data))
        });
    }
}
export const addProduct = (products) =>{
    return {
        type : Types.ADD_PRODUCT,
        products
    }
}

export const getProductDetailRequest = (id)=>{
    return (dispatch) =>{
        return callApi(`product/${id}`,'GET',null).then(res=>{
            dispatch(getProductDetail(res.data))
        });
    }
}
export const getProductDetail = (product) =>{
    return {
        type : Types.GET_DETAIL,
        product
    }
}

export const updateProductRequest = (product)=>{
    return (dispatch) =>{
        return callApi(`product/${product.id}`,'PUT',product).then(res=>{
            dispatch(updateProduct(res.data))
        });
    }
}
export const updateProduct = (product) =>{
    return {
        type : Types.UPDATE_PRODUCT,
        product
    }
}