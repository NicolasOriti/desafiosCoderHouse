- Realizar una clase "ProductManager" que gestione un conjunto de productos.

- Debe crearse desde su constructor con el elemento products, el cual sera un arreglo vacio.

- Cada producto que gestione debe contar con las propiedades:
  title (nombre del producto)
  description (descripcion del producto)
  price (precio)
  thumbnail (ruta de imagen)
  code (codigo identificador)
  stock (numero de piezas disponibles)

- Debe contar con un metodo "addProduct" el cual agregará un producto al arreglo de productos inicial.
  Validar que no se repita el campo "code" y que todos los campos sean obligatorios.
  Al agregarlo, debe crearse con un id autoincrementable.

- Debe contar con un metodo "getProducts" el cual debe devolver el arreglo con todos los productos creados hasta ese momento.

- Debe contar con un metodo "getProductById" el cual debe buscar en el arreglo el producto que coincida con el id
  En caso de no coincidir ningun id, mostrar en consola un error "Not found"