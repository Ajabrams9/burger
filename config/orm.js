// Import (require) connection.js into orm.js

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.

var connection = require('../config/connection.js')

var orm = 
{
	selectAll: function(callback) 
	{
		connection.query('SELECT * FROM burgers', function(err, result)
		{
			if (err) throw err;
			callback(result);
		});
	},
	

	insertOne: function(burger_name, callback)
	{
		connection.query('INSERT INTO burgers SET ?', 
			{	burger_name: burger_name,
				devoured: false,
			}, function(err, result)
			{
				if (err) throw err;
				callback(result);
			});
				
	},

	updateOne: function(id, callback)
	{
		connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: id}],
			function(err, result)
			{
				if (err) throw err;
				callback(result);
			});
	}
};



// Export the ORM object in module.exports.
module.exports = orm;
