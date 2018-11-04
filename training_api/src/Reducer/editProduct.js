import * as types from './../Contants/ActionTypes';

let initialState = {};
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DETAIL:
            return action.product;
        default: return state;
    }
}
export default myReducer;

