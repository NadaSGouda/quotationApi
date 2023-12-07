const mysql = require("mysql2");

const pool = mysql.createPool({
    host : process.env.host,
    user: process.env.user,
    database: process.env.database,
    password: process.env.password,
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
