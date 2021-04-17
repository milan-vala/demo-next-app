import * as actionTypes from "./types";

export const userLogin = (data) => (dispatch) => {
    dispatch({ type: actionTypes.USER_LOGIN })
}

export const userLogout = (data) => (dispatch) => {
    dispatch({ type: actionTypes.USER_LOGOUT })
}