// Arreglo de productos
const productos = [
    {
        nombre: "Laptop",
        precio: 800,
        descripcion: "Laptop para trabajo y estudio"
    },
    {
        nombre: "Mouse",
        precio: 20,
        descripcion: "Mouse inalámbrico"
    },
    {
        nombre: "Teclado",
        precio: 30,
        descripcion: "Teclado mecánico básico"
    }
];

// Referencia al elemento ul
const lista = document.getElementById("lista-productos");

// Función para renderizar los productos
function renderizarProductos() {
    // Limpiar la lista antes de volver a renderizar
    lista.innerHTML = "";

    productos.forEach(producto => {
        const item = document.createElement("li");

        item.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            ${producto.descripcion}
        `;

        lista.appendChild(item);
    });
}

// Renderizar productos al cargar la página
renderizarProductos();

// Botón para agregar un nuevo producto
const botonAgregar = document.getElementById("btn-agregar");

botonAgregar.addEventListener("click", () => {
    const nuevoProducto = {
        nombre: "Nuevo Producto",
        precio: 10,
        descripcion: "Producto agregado dinámicamente"
    };

    productos.push(nuevoProducto);
    renderizarProductos();
});
