import { FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from "./products.types";
import data from '../../data';

export const fetchProductsStart = () => ({
  type: FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchProductsError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: error
});

export const fetchProductAsync = () => {
  return async (dispatch) => {
    
    dispatch(fetchProductsStart());

    try{
      await dispatch(fetchProductsSuccess(data));

    }catch(err){
      dispatch(fetchProductsError(err.message));
    }
  }
}
