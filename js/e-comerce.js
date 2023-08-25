let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const IVA_RATE = 0.21;
const productos = document.querySelectorAll('.producto');
const listaCarrito = document.getElementById('lista-carrito');
const totalCarrito = document.getElementById('total');
const botonComprar = document.getElementById('comprar');
const botonLimpiar = document.getElementById('limpiar');

function guardarCarritoEnLocalStorage() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function calcularIVA(producto) {
  return producto.precio * IVA_RATE;
}

function actualizarCarrito() {
  listaCarrito.innerHTML = '';

  const carritoConIVA = carrito.map(producto => ({
    ...producto,
    iva: calcularIVA(producto),
  }));

  const total = carritoConIVA.reduce((total, producto) => total + producto.precio + producto.iva, 0);

  carritoConIVA.forEach(producto => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      ${producto.nombre} - $${producto.precio.toFixed(2)} (IVA: $${producto.iva.toFixed(2)})
    `;
    listaCarrito.appendChild(listItem);
  });

  totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
}

function agregarProducto(e) {
  const productoSeleccionado = e.target.parentElement;
  const nombreProducto = productoSeleccionado.querySelector('span:nth-child(2)').textContent;
  const precioProducto = parseFloat(productoSeleccionado.querySelector('.precio').textContent.slice(1));
  const imagenProducto = productoSeleccionado.querySelector('img').src;

  carrito.push({ nombre: nombreProducto, precio: precioProducto, imagen: imagenProducto });
  guardarCarritoEnLocalStorage();
  actualizarCarrito();
}




function realizarCompra() {
  alert(`¡Compra realizada! Total: $${totalCarrito.textContent.slice(8)}`);
  carrito.length = 0;
  guardarCarritoEnLocalStorage();
  actualizarCarrito();
}

function limpiarCarrito() {
  carrito.length = 0;
  guardarCarritoEnLocalStorage();
  actualizarCarrito();
}

productos.forEach(producto => {
  producto.querySelector('.agregar').addEventListener('click', agregarProducto);
});

botonComprar.addEventListener('click', realizarCompra);
botonLimpiar.addEventListener('click', limpiarCarrito);


actualizarCarrito();


