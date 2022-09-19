const ProductosControllers = require("../controllers/productosControllers");

const productController = new ProductosControllers();
const resolvers = {
  Query: {
    getAllProducts: async () => {
      const prod = await productController.getProducts();
      return prod
    },
  },
  Mutation: {
    createProduct: async (roots, { product }) => {
      const newProd = await productController.addNewProduct(product);
      return newProd;
    },
    deleteProduct: async (roots, { id }) => {
      const mensaje = await productController.deleteProduct(id);
      return mensaje;
    },
    updateProduct: async (roots, { id, product }) => {
      const updatedProd = await productController.updateProduct(id, product);

      return updatedProd;
    },
  },
};

module.exports = resolvers;
