var orm = require("../config/orm.js");
var express = require("express");
var router = express.Router();

var app = express();

router.get('/', function (req, res) {
	orm.selectAll(function(data){
		var hasObj = {
			burgers: data
		};
		console.log(hasObj);
		res.render("index", hasObj)
	})
});




// orm.selectAll();

module.exports = router;