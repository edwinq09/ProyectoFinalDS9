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