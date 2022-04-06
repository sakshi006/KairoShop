export const cartReducerFunction = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...action.payload] };
    case "INCREMENT_QTY":
      return { ...state, cart: [...action.payload] };
    case "DECREMENT_QTY":
      return { ...state, cart: [...action.payload] };
      case "ERROR_HANDLE":
        return { ...state}
    default:
      return { ...state };
  }
};
