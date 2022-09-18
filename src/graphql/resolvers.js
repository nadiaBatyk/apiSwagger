const resolvers = {
    Query:{
        getProducts:()=>`soy un producto`,
        getProduct:(nombre)=>`soy el producto ${nombre}`
    }
}


module.exports = resolvers