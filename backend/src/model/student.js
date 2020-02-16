const Sequelize = require('sequelize');

var sequelize = require('./database.js');

var tableName = 'Students';

var Students = sequelize.define(tableName, {
	registrationNo: {
		type: Sequelize.STRING,
		primaryKey: true
	},
	lastName: Sequelize.STRING,
	firstName: Sequelize.STRING,
	email: Sequelize.STRING,
	faculty: Sequelize.STRING,
	semester: Sequelize.STRING,
	fieldOfStudies: Sequelize.STRING,
	test1: Sequelize.STRING,
	test2: Sequelize.STRING,
	test3: Sequelize.STRING,
	test4: Sequelize.STRING,
	test5: Sequelize.STRING,
})

module.exports = Students;