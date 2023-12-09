const express = require("express");
const app = express();
const mydb = require("./config/db");
const route = require("./routes/router");
const cors = require("cors");
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(route);




app.listen( 3306 , () => {
    console.log("server is running")
})
