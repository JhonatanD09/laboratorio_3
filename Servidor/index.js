const express = require('express')
const app = express()
const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '2021SlFj09',
    database : 'test'
});

connection.connect(function(err) {
    // en caso de error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});

$query = 'SELECT * FROM users' ;


connection.query($query, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.");
        return;
    }
    console.log("Consulta ejecutada con éxito:", rows);
});

app.listen(4500, () => {
    console.log(`Example app listening at http://localhost:4500`)
})
