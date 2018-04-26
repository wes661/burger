var mysql = require("mysql");
var connection = require('./connection.js');



var orm = {

    selectAll: function(table){
        var queryString = "SELECT * FROM ??";
         connection.query(queryString, [table], function(err, res){
                if (err) throw err;
                console.log(res);
            });
    },

    insertOne: function(table, where, value){
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, where, value], function(err, res){
            if (err) throw err;
            console.log(res.insertId);
        });
    },

    updateOne: function(table, set, newVal, where, changedVal){
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, set, newVal, where, changedVal], function(err, res){
            if (err) throw err;
            console.log(res.insertId);
        });
    }
}    


module.exports = orm;

        
