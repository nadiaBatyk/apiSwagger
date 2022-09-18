const ProductosControllers = require("../controllers/productosControllers");

const productController = new ProductosControllers();
const resolvers = {
    Query:{
        getAllProducts:()=>productController.getProducts(),
        getProduct:(nombre)=>`soy el producto ${nombre}`
    }
}


module.exports = resolvers