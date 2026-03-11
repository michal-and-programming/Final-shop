import { SET_QUANTITY, SET_INFO, ADD_TO_CART, REMOVE } from "./cart.types";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const remove = (id) => ({
  type: REMOVE,
  payload: id
})

export const setQuantity = (id, quantity) => ({
  type: SET_QUANTITY,
  payload: {id, quantity}
});

export const setInfo = (id, info) => ({
  type: SET_INFO,
  payload: {id, info}
});
