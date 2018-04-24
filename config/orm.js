var mysql = require("mysql");
var connection = require('./connection.js');



var burgerMethods = {

    selectAll: function(){
        connection.database.connect(function(err){
            if (err) throw err;
            console.log("connected as id " + connection.database.threadId);
            connection.database.query("SELECT * FROM burgers", function(err, res){
                if (err) throw err;
                for(i = 0; i < res.length; i++){
                    console.log(res[i].burger_name);
                }
            });
            connection.database.end();
        })
    },

    insertOne: function(){
        connection.database.connect(function(err){
            if (err) throw err;
            console.log("connected as id " + connection.database.threadId);
            connection.database.query("INSERT INTO burgers SET ?",
            {
                burger_name: "onion burger"
            });
            console.log("Buger added");
            connection.database.end();
        })
    },

    updateOne: function(){
        connection.database.connect(function(err){
            if (err) throw err;
            console.log("connected as id " + connection.database.threadId);
            connection.database.query("UPDATE burgers SET ? WHERE ?",
            [
                {
                    burger_name: "BBQ Burger"
                },
                {
                    id: 4
                }
            ]);
            console.log("Burger Updated");
            connection.database.end();
        })
    }
}    
// burgerMethods.insertOne();
// burgerMethods.selectAll();
// burgerMethods.updateOne();

module.exports = burgerMethods;

        
