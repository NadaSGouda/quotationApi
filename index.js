const express = require("express");
const app = express();
const mydb = require("./config/db");
const dotenv = require('dotenv').config()
const route = require("./routes/router");
const bodyparser = require("body-parser");
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(route)


app.listen(process.env.PORT, ()=>{
    console.log("server is running")
})