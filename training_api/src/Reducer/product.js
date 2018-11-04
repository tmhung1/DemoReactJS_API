import * as types from './../Contants/ActionTypes';

let initialState = [];
var findIndex = (products, id) =>{
    let result = -1;
    products.forEach((product,index)=>{
        if(product.id === id) 
        result = index;
    })
    return result;
}
const myReducer = (state = initialState, action) => {
    let index = -1;
    let {id} = action;
    switch (action.type) {
        case types.LIST_ALL :
            state = action.products; 
            return [...state];
        case types.DELETE_PRODUCT : 
            index = findIndex(state,id);
            state.splice(index,1);
            return [...state];
        case types.ADD_PRODUCT :
            state.push(action.products); 
            return [...state];
        case types.UPDATE_PRODUCT:
            index = findIndex(state,action.product.id);
            state[index] = action.product;
            return [...state];
        default: return [...state];
    }
}
export default myReducer;

