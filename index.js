const express = require("express");
const app = express();
const mydb = require("./config/db");
const route = require("./routes/router");
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(route)


app.listen(process.env.PORT, ()=>{
    console.log("server is running")
})