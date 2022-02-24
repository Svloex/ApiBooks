import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { generalReducer } from "./reducer-All";

let reducers = combineReducers({
    general: generalReducer

});

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store

export default store;