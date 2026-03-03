import { FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, } from "./products.types";

const initialState = {
  products: [],
  info: '',
  quantity: 1,
  loading: false,
  error: null
};

const productsReducer = (state = initialState, action) => {
  switch(action.types){
    case FETCH_PRODUCTS_START:
      return(
        {...state, loading: true, error: null}
      );

    case FETCH_PRODUCTS_SUCCESS:
      return(
        {...state, products: [...state.products, action.payload], loading: false, error: null}
      )

    case FETCH_PRODUCTS_ERROR:
      return(
        {...state, loading: false, error: action.payload}
      )

    default:
      return state;
  }
}

export default productsReducer;