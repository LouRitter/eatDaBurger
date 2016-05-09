// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require('./connection.js');

// ORM 
// =============================================================
var orm = {

	// Here our ORM is creating a simple method for performing a query of the entire table.
	// We make use of the callback to ensure that data is returned only once the query is done.
	allBurgers: function(callback){
		var s = 'SELECT * FROM burgers WHERE devoured = 0;'
		connection.query(s, function(err, result) {
            callback(result);

        });
	},

	// Effectively, the ORM's simple addCharacter method translates into a more complex SQL INSERT statement. 

	addBurgers: function(burger, callback){
		var s = "INSERT INTO burgers (burger_name,devoured) VALUES (?,false)";
		connection.query(s,[burger], function(err,result) {
			console.log(result);
			callback(result);
        });
        
	},

	eatBurgers: function(burger,callback){
		var s = "UPDATE burgers SET devoured= true WHERE name=?;"
		connection.query(s,[burger], function(err, result) {
			callback(result);
        });
	}


};

module.exports = orm;