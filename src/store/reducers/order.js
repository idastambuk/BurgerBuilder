import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, {id: action.orderId});
    return updateObject(state, {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased: true
    });
};
const fetchOrdersFail = (state, action) => {
    return updateObject(state, {
        ...state,
        loading: false,
        error: true
    });
};
const fetchOrdersSuccess = (state, action) => {
    return updateObject(state, {loading: false,
        error: false,
        orders: action.orders
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.PURCHASE_BURGER_START:
            return updateObject(state, {loading: true});
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL:
            return updateObject(state, {loading: false});
        case actionTypes.PURCHASE_INIT:
            return updateObject(state, {purchased: false});
        case actionTypes.FETCH_ORDERS_START:
            return updateObject(state, {loading: true});
        case actionTypes.FETCH_ORDERS_FAIL:
            return fetchOrdersFail(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return fetchOrdersSuccess(state, action);
        default:
            return state
    }
};

export default reducer;