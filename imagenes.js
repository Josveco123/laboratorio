const images = [
    { src: '/images/pro1.jpg', title: 'Medicamento 1' },
    { src: '/images/pro2.jpg', title: 'Medicamento 2' },
    { src: '/images/pro3.jpg', title: 'Medicamento 3' },
    { src: '/images/pro4.jpg', title: 'Medicamento 4' },
    { src: '/images/pro5.jpg', title: 'Medicamento 5' },
    { src: '/images/pro6.jpg', title: 'Medicamento 6' },
    { src: '/images/pro7.jpg', title: 'Medicamento 7' },
    { src: '/images/pro8.jpg', title: 'Medicamento 8' },
    { src: '/images/pro9.jpg', title: 'Medicamento 9' },
    { src: '/images/pro10.jpg', title: 'Medicamento 10' },
    { src: '/images/pro11.jpg', title: 'Medicamento 11' },
    { src: '/images/pro12.jpg', title: 'Medicamento 12' },
    { src: '/images/pro13.jpg', title: 'Medicamento 13' }
    // ... Agrega las otras imágenes y títulos aquí
  ];
  

// Función para generar el HTML de las imágenes y títulos
function generateImageHTML(image) {
    return `
      <div class="image">
      <p class="tit-image">${image.title}</p>
        <img src="${image.src}" alt="${image.title}">
      </div>
    `;
  }
  
  // Función para agrupar las imágenes en grupos de cuatro
  function groupImages(images, groupSize) {
    const groupedImages = [];
    
    for (let i = 0; i < images.length; i += groupSize) {
      groupedImages.push(images.slice(i, i + groupSize));
    }
    
    return groupedImages;
  }
  
  // Obtiene el contenedor
  const container = document.getElementById('container1');
  
  // Agrupa las imágenes en grupos de cuatro
  const groupedImages = groupImages(images, 4);
  
  // Genera el HTML y muestra las imágenes en el contenedor
  groupedImages.forEach((group) => {
    const imageGroup = document.createElement('div');
    imageGroup.className = 'image-group';
    
    group.forEach((image) => {
      const imageHTML = generateImageHTML(image);
      const imageElement = document.createElement('div');
      imageElement.innerHTML = imageHTML;
      imageElement.className = 'borde-image';
      imageGroup.appendChild(imageElement);
    });
    
    container1.appendChild(imageGroup);
  });