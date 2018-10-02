import {takeEvery, all, takeLatest} from 'redux-saga/effects';
import * as actionTypes from "../actions/actionTypes";

import {logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga} from "./auth";
import {initIngredientSaga} from "./burgerBuilderSaga";
import {fetchOrdersSaga, purchaseBurgerSaga} from "./ordersSaga";

export function* watchAuth() {
    yield all([ //runs all the tasks passed to it !simultaneously
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga ),
        takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga ), //listens to actions
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_INITIAL_STATE, authCheckStateSaga)
    ]);
   /* yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga );
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga ); //listens to actions
    yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_INITIAL_STATE, authCheckStateSaga);*/
}

export function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientSaga);
}

export function* watchOrder() {
    yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);//takeLatest takes only the last purchase burger dispatch
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);

}

