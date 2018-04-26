var mysql = require("mysql");
var connection = require('./connection.js');



var orm = {

    selectAll: function(){
        var queryString = "SELECT * FROM burgers";
         connection.query(queryString, function(err, res){
                if (err) throw err;
                console.log(res);
            });
    },

    insertOne: function(val){
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [val], function(err, res){
            if (err) throw err;
            console.log(res.insertId);
        });
    },

    updateOne: function(changedId){
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, [changedId], function(err, res){
            if (err) throw err;
            console.log(res.insertId);
        });

    }
}    

// orm.selectAll();
module.exports = orm;

        
