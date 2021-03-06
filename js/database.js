const mysql = require('promise-mysql');

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '30k9aELZ20', 
    database: 'urbandb', 
    auth_plugin:'mysql_native_password'
});

function getConnection() {
    return connection;
    console.log('ola2');
}

module.exports = {getConnection}