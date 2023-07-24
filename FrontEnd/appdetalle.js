const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetch(`http://localhost:3000/detalles?id=${id}`)
    .then(response => response.json())
    .then(data => {
        const ruta_imagenes ="C:\imagenes_des9";
        const section = document.querySelector('.contComp'); // Cambio de getElementById a querySelector
        const listaproductos = document.createElement('ul');
        listaproductos.setAttribute('class', 'list-group');
        section.appendChild(listaproductos);
        data.forEach(products => {
            const listItem = document.createElement('li');
            listItem.setAttribute('class', 'list-group-item');
            console.log( products.imagen);
            
            
            listItem.innerHTML = `  
            <img src="${ruta_imagenes + products.imagen}" alt="${ruta_imagenes}" width="100" height="100">
            <p>${products.producto}</p>
            <p>${products.marca}</p>
            <p>Descripción: ${products.descripcion}</p>
            <p>Cantidad: ${products.cantidad}</p>
            <p>Precio: ${products.precio}</p>
            `;
            listaproductos.appendChild(listItem);
        });
    })
