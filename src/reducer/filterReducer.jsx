export const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: "LOW_TO_HIGH" };
    case "HIGH_TO_LOW":
      return { ...state, sortBy: "HIGH_TO_LOW" };
    case "NAMEA-Z":
      return { ...state, sortBy: "NAMEA-Z" };
    case "NAMEZ-A":
      return { ...state, sortBy: "NAMEZ-A" };
    case "RATING":
        return { ...state, sortBy: "RATING" };
    default:
      return state;
  }
};
