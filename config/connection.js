
var mysql = require('mysql');
var connection;


if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', 
    database: 'burgers_db',
    port: 8889
  });
}


// Export the Connection
module.exports = connection;