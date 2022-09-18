const ProductosRepository = require("../servicios/productosRepository");

module.exports = class ProductosControllers {
  constructor() {
    this.productosRepository = new ProductosRepository();
  }
  getProducts = async () => {
    try {
      let productos = await this.productosRepository.obtenerProductos();
      return productos;
    } catch (error) {
      return error;
    }
  };

  addNewProduct = async (producto) => {
    try {
      let newProduct = await this.productosRepository.agregarProducto(producto);
      return newProduct;
    } catch (error) {
      return error;
    }
  };
  deleteProduct = async (idProd) => {
    try {
      let mensaje = await this.productosRepository.eliminarProducto(idProd);
      return mensaje;
    } catch (error) {
      return error;
    }
  };
  updateProduct = async (producto) => {
    try {
      let newProduct = await this.productosRepository.modificarProducto(
        producto
      );
      return newProduct;
    } catch (error) {
      return error;
    }
  };
};
