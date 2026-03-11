import { ADD_TO_CART, SET_QUANTITY, SET_INFO, REMOVE } from "./cart.types";

const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_TO_CART:{

      const existingProduct = state.cart.find(item => item.id === action.payload.id);

      if(existingProduct){
        return(
          {...state,
            cart: state.cart.map(
              item => item.id === action.payload.id
              ? {...item, quantity: item.quantity + action.payload.quantity}
              : item
            )
          }
        )
      }

      return(
        {...state, cart: [...state.cart, action.payload]}
      )
    }

    case SET_QUANTITY:
      return(
        {...state, 
          cart: state.cart.map(
            item => item.id === action.payload.id
            ? {...item, quantity: action.payload.quantity}
            : item
          )
        }
      );

    case SET_INFO:
      return(
        {...state, 
          cart: state.cart.map(
            item => item.id === action.payload.id
            ? {...item, info: action.payload.info}
            : item
          )
        }
      );

    case REMOVE:
      return(
        {...state, cart: state.cart.filter(item => item.id !== action.payload.id)}
      );

    default: return state;
  }
}

export default cartReducer;
