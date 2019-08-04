const express = require ("express");
const handlebars = require("express-handlebars");
const connection = require("./config/connection")

const app = express();
const PORT = process.env.PORT || 8000;

const orm = require("./config/orm")

orm.selectAll("burgers")
orm.insertOne("Angus five-star burger")
orm.updateOne(true, 3)

app.engine("handlebars", handlebars({ default:"main"}));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use(express.static("public"))

var routes = require("./controllers/burgers_controller")
// app.use(routes)

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});

