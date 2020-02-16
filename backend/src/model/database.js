var Sequelize = require('sequelize');

const sequelize = new Sequelize(
	'TU', /// Database Name
	'root', /// userName
	'password123456', /// password For the user
	{
		/// hosting information
		host: 'localhost',
		dialect: 'mysql'

	}
);

module.exports = sequelize;