import { FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from "./products.types";

const initialState = {
  products: [],
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

    default:
      return state;
  }
}

export default productsReducer;
