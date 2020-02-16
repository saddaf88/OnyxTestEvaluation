const controller = {};

var TesScore = require('../model/testScore');
///var Role = require('../model/role');
var sequelize = require('../model/database');

//sequelize.sync();

controller.list = async (req, res) => {
	// const data = await Employee.findAll({
	// 	include: [Role]
	// }).then(function (data) {
	// 	return data;
	// }).catch(error => {
	// 	return error;
	// })

	// res.json({ success: true, data: data });
}

controller.get = async (req, res) => {
	// const { id } = req.params;

	// const data = await Employee.findAll({
	// 	where: { id: id },
	// 	include: [Role]
	// }).then(function (data) {
	// 	return data;
	// }).catch(error => {
	// 	return error;
	// })

	// res.json({ success: true, data: data })

	//res.json({ success: true, data: id });
}

controller.testdata = async (req, res) => {

	// const response = await sequelize.sync().then(function () {

	// 	// Role.create({
	// 	// 	role: 'Admin'
	// 	// })

	// 	// Employee.create({
	// 	// 	name: 'Saddaf Afrin Khan',
	// 	// 	email: "something@fff.com",
	// 	// 	adress: "Reichenhainer 35, room 134, chemnitz - 09126",
	// 	// 	phone: '+4915732063136',
	// 	// 	roleId: 1
	// 	// })

	// 	const data = Employee.findAll()
	// 	return data;
	// })
	// 	.catch(err => {
	// 		return err;
	// 	});
	// res.json({ success: true, data: response })

}

// controller.list = async (req, res) => {

// 	const data = await Employee.findAll();
// 	res.json(data)

// }


controller.test = (req, res) => {
	// const data = {
	// 	name: "Afrin",
	// 	city: "Chemnitz",
	// 	age: "n/a"
	// }

	// console.log("Execute from controller");
	// res.json(data);
}

controller.GetAllData = (req, res) => {
	// const data = {
	// 	data: [{
	// 		name: "Saddaf Afrin Khan",
	// 		"Date of Birth": "29051988"
	// 	}, {
	// 		name: "jannat",
	// 		"Date of Birth": "13091234"
	// 	}]

	// }

	// console.log("Executing from GetAllData Controller");
}

module.exports = controller;