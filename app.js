var mysql = require('mysql2');

var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mstdel95',
    database: 'dbcomentario'
});

conexion.connect(function(err) {
    if (err) throw err;
    console.log("Conectado a la base de datos");
});

// conexion.end();

//Consultar datos

conexion.query('SELECT * FROM comentarios',function(error, filas) {
 if (error) throw error;
 console.log(filas);
})

//Insertar datos

// conexion.query('INSERT INTO comentarios SET ?', {
//     titulo: 'REACT',
//     creador: 'ALEJANDRO',
//     comentario: 'APRENDIENDO REACT',
//     fecha: new Date()
// }, function(error, resultado) {
//     if (error) throw error;
//     console.log(resultado);
// })

//Modificar datos

// conexion.query('UPDATE comentarios SET creador="ANA", comentario="APRENDIENDO TYPESCRIPT" WHERE id=3',
// function(error, resultado){
//     if (error) throw error;
//     console.log('El registro se actualizo correctamente',resultado);
// })

//Eliminar datos

// conexion.query('DELETE FROM comentarios WHERE id=3', function(error, resultado){
//     if (error) throw error;
//     console.log('El registro se eliminó correctamente',resultado);
// })