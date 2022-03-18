export const BestSellerFunc =(products, BestSeller)=>{
    if(BestSeller) return products.filter(item=> item.isBestSeller === BestSeller) 
     return products
}