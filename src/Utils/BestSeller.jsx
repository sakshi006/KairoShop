export const BestSellerFunc =(products, BestSeller)=>{
    return products.filter(item=> item.isBestSeller === BestSeller)
}