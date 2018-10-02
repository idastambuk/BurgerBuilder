import axios from "../../axios-orders";
import * as actions from '../actions';

import { put } from 'redux-saga/effects';

export function* initIngredientSaga () {
    try {
        const response = yield axios.get('/ingredients.json');
        yield put(actions.setIngredients(response.data));
    } catch (error) {
        yield put(actions.fetchIngredientsFailed());
    }
}