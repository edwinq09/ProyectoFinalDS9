<<<<<<< HEAD
// Importar los módulos necesarios
const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
const app = express();



// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datoss.');
});

// Función para obtener los productos de la base de datos



//rutas de Express
app.get('/Principal', (req, res) => {
  
  // Consulta SQL a ejecutar
connection.query('SELECT * FROM productos', (err, results) => {
  if (err) 
    throw err;
    res.json(results);
    
});


  

});



app.get('/', (req, res) => {
  res.send('¡Hola, este es mi servidor Express!');
});

// Iniciar el servidor Express
const port = process.env.PORT || 3000; // Puerto del servidor
app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});




=======
const config = require('./dbconfig');

const rest = new (require('rest-mssql-nodejs'))({

    user: config.user,
    password: config.password,
    server: config.server,
    database: config.database

}
);

setTimeout(async () => {

    const resultado = await rest.executeStoredProcedure('sp_buscar_producto',null,{
        i_operacion: 'Qi',
        i_pr_id:2

    });

    console.log(resultado.data);
    
}, 1500);
>>>>>>> cab74cf52dcd2e6d40062fbdc751dbf8468414f6
