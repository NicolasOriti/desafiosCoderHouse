const ProductManager = require('./ProductManager');

const main = () => {
  const productManager = new ProductManager();

  console.log(productManager.getProducts());

  productManager.addProduct({
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25,
  });

  console.log(productManager.getProducts());
  productManager.addProduct({
    title: 'producto prueba',
    description: 'Este es un producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25,
  });

  console.log(productManager.getProductById(0));
  console.log(productManager.getProductById(10));
};

main();
