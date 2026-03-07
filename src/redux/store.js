import { combineReducers, createStore, applyMiddleware } from "redux";
import productsReducer from './productsReducer';
import {thunk}  from "redux-thunk";

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
