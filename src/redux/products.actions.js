import { FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR  } from "./products.types";

export const fetchProductsStart = () => ({
  type: FETCH_PRODUCTS_START
});

export const fetchUserSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchUserError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: error
});