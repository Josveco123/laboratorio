var navVerProductos = document.getElementById('ver-productos');
var productoMenu = document.getElementById('producto-menu');

// Variable para rastrear el estado del menú
var menuVisible = false;

// Agrega un evento de clic al enlace "Productos"
navVerProductos.addEventListener('click', function (event) {
  // Evita el comportamiento predeterminado del enlace
  event.preventDefault();

  // Cambia la visibilidad del menú desplegable agregando o eliminando la clase CSS "show"
  productoMenu.classList.toggle('show');

  // Actualiza el estado del menú
  menuVisible = !menuVisible;

  // Muestra u oculta el elemento con id 'muesca' según el estado del menú
  if (menuVisible) {
    document.getElementById('muesca').style.display = 'block';
  } else {
    document.getElementById('muesca').style.display = 'none';
  }
});