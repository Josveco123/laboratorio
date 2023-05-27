// Variable para rastrear el estado del menú
var navVerProductos = document.getElementById('ver-productos');
var productoMenu = document.getElementById('producto-menu');
var muesca = document.getElementById('muesca');

// Variable para rastrear el estado del menú
var menuVisible = false;

// Función para cerrar el menú
function cerrarMenu() {
  // Oculta el menú desplegable y actualiza el estado del menú
  productoMenu.classList.remove('show');
  menuVisible = false;
  // Oculta el elemento con id 'muesca'
  muesca.style.display = 'none';
}

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
    muesca.style.display = 'block';
  } else {
    muesca.style.display = 'none';
  }

  // Detiene la propagación del evento clic para evitar que se cierre automáticamente al hacer clic en el enlace
  event.stopPropagation();
});

// Agrega un evento de clic al documento
document.addEventListener('click', function (event) {
  // Verifica si el clic se originó dentro del menú
  var isClickInsideMenu = productoMenu.contains(event.target);

  // Si el menú está abierto y se hizo clic fuera de él, cierra el menú
  if (menuVisible && !isClickInsideMenu) {
    cerrarMenu();
  }
});

// inicio zonas =========================================

var navVerZona = document.getElementById('ver-zona');
var zonaMenu = document.getElementById('zona-menu');
var muesca1 = document.getElementById('muesca1');

var menuVisibleZ = false;

function cerrarMenuZ() {
  zonaMenu.classList.remove('show');
  menuVisibleZ = false;
  muesca1.style.display = 'none';
}

navVerZona.addEventListener('click', function (event) {
  event.preventDefault();
  zonaMenu.classList.toggle('show');
  menuVisibleZ = !menuVisibleZ;
  if (menuVisibleZ) {
    muesca1.style.display = 'block';
  } else {
    muesca1.style.display = 'none';
  }
    event.stopPropagation();
});


document.addEventListener('click', function (event) {
  var isClickInsideMenu = zonaMenu.contains(event.target);
  if (menuVisibleZ && !isClickInsideMenu) {
    cerrarMenuZ();
  }
});