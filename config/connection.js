var mysql = require("mysql");


module.exports = {
    database: mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db"
    })
}    



// database.connect(function(err){
//     if (err) throw err;
//     console.log("connected as id " + connection.database.threadId);
//     allBurgers();
// })
   
