import { FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, SET_QUANTITY, SET_INFO, } from "./products.types";

const initialState = {
  products: [],
  info: '',
  quantity: 1,
  loading: false,
  error: null
};

const productsReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_PRODUCTS_START:
      return(
        {...state, loading: true, error: null}
      );

    case FETCH_PRODUCTS_SUCCESS:
      return(
        {...state, products: action.payload, loading: false, error: null}
      );

    case FETCH_PRODUCTS_ERROR:
      return(
        {...state, loading: false, error: action.payload}
      );

    case SET_QUANTITY:
      return(
        {...state, quantity: action.payload}
      );

    case SET_INFO:
      return(
        {...state, info: String(action.payload)}
      )

    default:
      return state;
  }
}

export default productsReducer;
