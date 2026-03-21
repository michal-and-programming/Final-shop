import { ADD_TO_CART, SET_QUANTITY, SET_INFO, REMOVE } from "./cart.types";

const loadCartFromStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveCartToStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const initialState = {
  cart: loadCartFromStorage()
};

const cartReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_TO_CART:{

      const existingProduct = state.cart.find(item => item.id === action.payload.id);

      let updatedCart;

      if(existingProduct){
        updatedCart = state.cart.map(item =>
          item.id === action.payload.id
          ? { ...item, quantity: item.quantity + action.payload.quantity }
          : item
        );
      } else {
        updatedCart = [...state.cart, action.payload];
      }
      saveCartToStorage(updatedCart);

      return(
        {...state, cart: updatedCart}
      )
    }

    case SET_QUANTITY:{ 
      const updatedCart = state.cart.map(
        item => item.id === action.payload.id
        ? {...item, quantity: action.payload.quantity}
        : item
      )
      saveCartToStorage(updatedCart);

      return(
        {...state, cart: updatedCart}
      )
    }

  case SET_INFO: {
    const updatedCart = state.cart.map(item =>
      item.id === action.payload.id
      ? { ...item, info: action.payload.info }
      : item
    );

    saveCartToStorage(updatedCart);

    return( 
      {...state, cart: updatedCart}
    );
  }

  case REMOVE: {
    const updatedCart = state.cart.filter(item => item.id !== action.payload.id);

    saveCartToStorage(updatedCart);

    return( 
      {...state, cart: updatedCart}
    )
  }

  default: return state;
  }
}

export default cartReducer;
