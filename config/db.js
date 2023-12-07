
const mysql = require("mysql2")
 
const config = {
    host : 'sql12.freesqldatabase.com',
    user: 'sql12668501',
    database: 'sql12668501',
    password: 'jfebUzKkDf',
    multipleStatements: true
}
 
const connection = mysql.createConnection(config)
 
connection.connect(function(err) {
    if (err) throw(err);
    console.log("Connected!");
});

module.exports = connection
