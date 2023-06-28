const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'smarttalenttest'
});

connection.connect(function(err) {
  if (err) {
    console.error('Error de conexión: ' + err.stack);
    return;
  }

  console.log('Conexión a la base de datos establecida con éxito');
});

module.exports = connection;