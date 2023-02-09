class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    const prodExample = {
      title: 'nombre',
      description: 'descripcion',
      price: 20,
      thumbnail: 'urlimage',
      code: 1,
      stock: 100,
    };
    let id = 0;

    for (var prop in prodExample) {
      if (!product.hasOwnProperty(prop)) {
        return console.error('Error: Al objeto le falta la propiedad:', prop);
      }
    }

    if (this.products.some((prod) => prod.code === product.code)) {
      return console.error('Ya existe un producto con ese code.');
    }

    if (this.products.length > 0) {
      id = this.products[this.products.length - 1].id + 1;
    }

    this.products.push({ id, ...product });
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const prodSelected = this.products.find((prod) => prod.id === id);

    if (prodSelected === undefined) {
      return console.error('Not found');
    }
    return prodSelected;
  }
}

module.exports = ProductManager;
