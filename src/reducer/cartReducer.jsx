export const cartReducerFunction = (state, action) => {
  switch (action.type) {
    case "REMOVE_FROM_CART":
      const filteredProducts = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cartList: filteredProducts };
    case "ADD_TO_CART":
      return {
        ...state,
        cartList: [...state.cartList, { ...action.payload, quantity: 1 }],
      };
    case "INCREMENT_QTY":
      return {
        ...state,
        cartList: state.cartList.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      };
    case "DECREMENT_QTY":
      return {
        ...state,
        cartList: state.cartList.map((cartItem) =>
          cartItem.id === action.payload.id
            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity > 1
                    ? cartItem.quantity - 1
                    : cartItem.quantity,
              }
            : cartItem
        ),
      };
    default:
      return { ...state };
  }
};
