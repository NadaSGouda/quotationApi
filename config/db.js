const mysql = require("mysql2");

const pool = mysql.createPool({
    host : 'sql12.freesqldatabase.com',
    user: 'sql12668252',
    database: 'sql12668252',
    password: 'SQHDjkdtQs',
    multipleStatements: true
});

pool.getConnection((err, conn) => {
    if(err){
        console.log(err);
    }else{
        console.log("connected")
    }
})

module.exports = pool.promise();