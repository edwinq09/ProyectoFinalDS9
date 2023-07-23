fetch('localhost:3000/Principal')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes manipular los datos recibidos del backend y mostrarlos en pantalla
    console.log(data);
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });