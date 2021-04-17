import * as actionTypes from "./types";

let initialState = {
    login: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.USER_LOGIN:
            return { ...state, login: true }
        case actionTypes.USER_LOGOUT:
            return { ...state, login: false }
        default:
            return state;
    }
}