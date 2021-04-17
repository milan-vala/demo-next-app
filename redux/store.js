import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from "./reducers";

const middlewares = [thunk];

const store = createStore(
    reducers,
    {}, // initial state
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;