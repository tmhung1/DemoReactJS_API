import {combineReducers} from 'redux';
import product from './product';
import editProduct from './editProduct';
const myReducer = combineReducers({
    product,
    editProduct
});
export default myReducer;