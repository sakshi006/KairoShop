export const wishListReducer =(state,action) =>{
    switch(action.type){
        case "ADD_TO_WISHLIST":
            return {...state,wishListArray: [...state.wishListArray,{...action.payload, inWishList : true}]}
        case "REMOVE_FROM_WISHLIST":
            return {...state, wishListArray: state.wishListArray.filter((product)=>product.id!==action.payload.id)}
        default:
          return {...state}
    }
}