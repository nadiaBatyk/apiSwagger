const ProductosControllers = require("../controllers/productosControllers");

const productController = new ProductosControllers();
const resolvers = {
  Query: {
    getAllProducts: () => productController.getProducts(),
  },
  Mutation: {
    createProduct: (roots, { product }) => {
      return productController.addNewProduct(product);
    },
    deleteProduct:(roots,{id})=>productController.deleteProduct(id)
  },
};

module.exports = resolvers;
