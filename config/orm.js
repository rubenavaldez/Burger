var connection = require("./connection")

var orm = {
    selectAll: function(tableName){
        connection.query("SELECT * FROM ??;", [tableName],function(err,result){
            if(err) throw err;
            console.log(result)
        })
    },
    insertOne: function(input){
        connection.query("insert into burgers(burger_name)Value(?);",[input], function (err,result){
            if(err) throw err;
            console.log(result)
        })
    },
    updateOne:function (devoured, id){
        connection.query("UPDATE burgers set devoured = ? WHERE id = ?;",[devoured, id], function (err,result){
            if(err) throw err;
            console.log(result)
        })
    }

}

module.exports = orm;

