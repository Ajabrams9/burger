// Inside the connection.js file, setup the code to connect Node to MySQL.

// Export the connection.

var mysql = require("mysql");


var connection = process.env.JAWSDB_URL ?
    mysql.createConnection(process.env.JAWSDB_URL) :
    mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "AVG2efTG!",
        database: "burgers_db"
    });

connection.connect(function (err) {
    if (err) {
        console.log("error connecting" + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);
});

module.exports = connection;