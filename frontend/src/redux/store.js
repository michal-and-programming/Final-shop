import { combineReducers, createStore, applyMiddleware } from "redux";
import productsReducer from './products/productsReducer';
import cartReducer from "./cart/cartReducer";
import {thunk}  from "redux-thunk";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
