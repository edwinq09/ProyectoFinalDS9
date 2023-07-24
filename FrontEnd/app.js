
(() => {
  
  fetch('http://localhost:3000/Principal')
  
    .then(response => response.json())
    .then(data => {
      const ruta_imagenes ="C:\imagenes_des9";
      const section = document.querySelector('.contComp'); // Cambio de getElementById a querySelector

      const listaproductos = document.createElement('div');
      listaproductos.setAttribute('class', 'list-group');
      section.appendChild(listaproductos);
      data.forEach(products => {
        const listItem = document.createElement('div');
        listItem.setAttribute('class', 'list-group-item');
        console.log( products.imagen);
        
        
        listItem.innerHTML = `  
          <a href="detalles.html?id=${products.id}">   <img class = 'list-group-image' src="${ruta_imagenes + products.imagen}" alt="${ruta_imagenes}" width="100" height="100"></a>
          <p>${products.producto}</p>
          <p>Precio: ${products.precio}</p>
          
        `;
        listaproductos.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
})();
