export const wishListReducer =(state,action) =>{
    switch(action.type){
        case "ADD_TO_WISHLIST":
            return {...state,wishListArray: [...action.payload]}
        default:
          return {...state}
    }
}