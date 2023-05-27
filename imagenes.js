const images = [
    { src: '/images/pro1.jpg', title: 'ARTRIXIN' },
    { src: '/images/pro2.jpg', title: 'EROKON' },
    { src: '/images/pro3.jpg', title: 'HELMIFLU' },
    { src: '/images/pro4.jpg', title: 'HITALKÉ' },
    { src: '/images/pro5.jpg', title: 'INFIBU-M' },
    { src: '/images/pro6.jpg', title: 'NOMANTÉ' },
    { src: '/images/pro7.jpg', title: 'NOMANTÉ' },
    { src: '/images/pro8.jpg', title: 'SINTOMAX' },
    { src: '/images/pro9.jpg', title: 'SINTROX' },
    { src: '/images/pro10.jpg', title: 'VITIFER' },
    { src: '/images/pro11.jpg', title: 'VITIFER PLUS' },
    { src: '/images/pro12.jpg', title: 'VITAMINA C' },
    { src: '/images/pro13.jpg', title: 'SINUPHIS' }
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