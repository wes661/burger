var express = require('express');
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require('./controllers/burger_controller.js');

app.use(routes);

app.listen(PORT, function () {
	console.log("Server listening on: http://localhost:" + PORT);
});








// var orm = require("./config/orm.js");


// orm.selectAll("burgers");

// orm.insertOne("burgers", "burger_name", "Western Burger");

// orm.updateOne("burgers", "burger_name", "Turkey burger", "burger_name", "onion burger");