// Variable para rastrear el estado del menú de productos
var navVerProductos = document.getElementById('ver-productos');
var productoMenu = document.getElementById('producto-menu');
var muesca = document.getElementById('muesca');
var menuVisibleP = false;

// Variable para rastrear el estado del menú de la zona
var navVerZona = document.getElementById('ver-zona');
var zonaMenu = document.getElementById('zona-menu');
var muesca1 = document.getElementById('muesca1');
var menuVisibleZ = false;

// Función para cerrar el menú de productos
function cerrarMenuP() {
  productoMenu.classList.remove('show');
  menuVisibleP = false;
  muesca.style.display = 'none';
}

// Función para cerrar el menú de la zona
function cerrarMenuZ() {
  // Oculta el menú desplegable de la zona y actualiza el estado del menú
  zonaMenu.classList.remove('show');
  menuVisibleZ = false;
  // Oculta el elemento con id 'muesca1'
  muesca1.style.display = 'none';
}

// Agrega un evento de clic al enlace "Productos"
navVerProductos.addEventListener('click', function (event) {
  event.preventDefault();
  // Si el menú de la zona está abierto, ciérralo antes de abrir el menú de productos
  if (menuVisibleZ) {
    cerrarMenuZ();
  }
  // Cambia la visibilidad del menú desplegable de productos agregando o eliminando la clase CSS "show"
  productoMenu.classList.toggle('show');
  // Actualiza el estado del menú de productos
  menuVisibleP = !menuVisibleP;
  // Muestra u oculta el elemento con id 'muesca' según el estado del menú de productos
  if (menuVisibleP) {
    muesca.style.display = 'block';
  } else {
    muesca.style.display = 'none';
  }
  event.stopPropagation();
});

// Agrega un evento de clic al enlace "Ver Zona"
navVerZona.addEventListener('click', function (event) {
  event.preventDefault();
  // Si el menú de productos está abierto, ciérralo antes de abrir el menú de la zona
  if (menuVisibleP) {
    cerrarMenuP();
  }
  // Cambia la visibilidad del menú desplegable de la zona agregando o eliminando la clase CSS "show"
  zonaMenu.classList.toggle('show');
  // Actualiza el estado del menú de la zona
  menuVisibleZ = !menuVisibleZ;
  // Muestra u oculta el elemento con id 'muesca1' según el estado del menú de la zona
  if (menuVisibleZ) {
    muesca1.style.display = 'block';
  } else {
    muesca1.style.display = 'none';
  }
  event.stopPropagation();
});

// Agrega un evento de clic al documento
document.addEventListener('click', function (event) {
  // Verifica si se hizo clic fuera del menú de productos y lo cierra si está abierto
  if (menuVisibleP && !navVerProductos.contains(event.target) && !productoMenu.contains(event.target)) 
  { cerrarMenuP()
  }

  // Verifica si se hizo clic fuera del menú de la zona y lo cierra si está abierto
  if (menuVisibleZ && !navVerZona.contains(event.target) && !zonaMenu.contains(event.target)) 
  {
    cerrarMenuZ();
  }
});

// deslizamiento liea 1 =======================
//************************************* */
function deslizarDiv() {
  var div = document.getElementById('linea1');
  var width = div.offsetWidth;
  var windowWidth = window.innerWidth;
  var currentPosition = 0;
  var interval = setInterval(frame, 10);

  function frame() {
    if (currentPosition >= windowWidth) {
      clearInterval(interval);
      div.style.left = '0px';
      deslizarDiv(); // Reiniciar el deslizamiento
    } else {
      currentPosition++;
      div.style.right = currentPosition + 'px';
    }
  }
}

deslizarDiv(); // Iniciar el deslizamiento al cargar la página