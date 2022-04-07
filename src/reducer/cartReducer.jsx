export const cartReducerFunction = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...action.payload], loading: false };
    case "INCREMENT_QTY":
      return { ...state, cart: [...action.payload], loading: false };
    case "DECREMENT_QTY":
      return { ...state, cart: [...action.payload], loading: false };
    case "ERROR_HANDLE":
      return { ...state, loading: false };
    case "API_REQUEST":
      return { ...state, loading: true };
    default:
      return { ...state };
  }
};
