import * as types from './../Contants/ActionTypes';

let initialState = [
    {
        id : 1,
        name : 'iphone X',
        price : 1222,
        status : true
    },
    {
        id : 2,
        name : 'iphone XMax',
        price : 1444,
        status : false
    },
    {
        id : 3,
        name : 'iphone 8',
        price : 1222,
        status : true
    }
];

const myReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case types.LIST_ALL : 
            return state;
        default: return [...state];
    }
}
export default myReducer;

