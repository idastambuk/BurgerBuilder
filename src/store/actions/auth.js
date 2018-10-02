import * as actionTypes from './actionTypes';
import {AUTH_REDIRECT_PATH} from "./actionTypes";
import {AUTH_USER} from "./actionTypes";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};
export const authSuccess = (token, localId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: localId
    }
};
export const authError = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const logout = () => {
    /*localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');*/
    return {
        type: actionTypes.AUTH_INITIATE_LOGOUT
    }
};

export const logoutSucceed =() => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return {
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        expirationTime: expirationTime
    }
};

export const authCheckState = () => {
    return {
        type: actionTypes.AUTH_CHECK_INITIAL_STATE
    }
};

export const auth = (email, password, isSignup) => {
    return {
        type: AUTH_USER,
        email: email,
        password: password,
        isSignup: isSignup
    }
};

export const setAuthRedirectPath = (path) => {
    return {
       type : AUTH_REDIRECT_PATH,
        path: path
    }
};
