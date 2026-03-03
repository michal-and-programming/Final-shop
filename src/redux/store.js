import { combineReducers, createStore } from "redux";
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

export default store;