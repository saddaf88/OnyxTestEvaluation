const Sequelize = require('sequelize');

var sequelize = require('./database.js');
var Student = require('./student')

var tableName = 'testScore';

var TestScore = sequelize.define(tableName, {
	registrationNo: {
		type: Sequelize.INTEGER,
		refences: {
			model: Student,
			key: 'registrationNo'
		}
	},
	testName: Sequelize.STRING,
	trial: Sequelize.INTEGER,
	score: Sequelize.BIGINT,

})

module.exports = TestScore;