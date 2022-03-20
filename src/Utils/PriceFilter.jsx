export const PriceFilter = (products, price) => {
    return products.filter((item)=> item.price<=price)
}