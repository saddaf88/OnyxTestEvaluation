const controller = {};

var Student = require('../model/student');
var sequelize = require('../model/database');

sequelize.sync();

controller.update = async (req, res) => {
	// parameter get id
	const { registrationNo } = req.params;
	// parameter POST
	const { testinfo } = req.body;
	// Update data
	const data = await Student.update(testinfo,
		{
			where: { registrationNo: registrationNo }
		})
		.then(function (data) {
			return data;
		})
		.catch(error => {
			return error;
		})
	res.json({ success: true, data: data, message: "Updated successful" });
}


controller.testcreate = async (req, res) => {


	const response = await sequelize.sync().then(function () {
		Student.create({
			registrationNo: 'r',
			lastName: "jijjj",
			firstName: "fdgg",
			email: "tttt",
			faculty: "34",
			semester: "gthhh",
			fieldOfStudies: "gggg",
			institution: "hhhh"
		})

		const data = Student.findAll()
		return data;
	}).catch(err => {
		return err;
	});
	res.json({ success: true, data: response })

}

controller.testdata = async (req, res) => {

	const response = await sequelize.sync().then(function () {
		Student.create({
			registrationNo: 'test2',
			lastName: "jijjj",
			firstName: "fdgg",
			email: "tttt",
			faculty: "34",
			semester: "gthhh",
			fieldOfStudies: "gggg",
			institution: "hhhh"
		})

		const data = Student.findAll()
		return data;
	}).catch(err => {
		return err;
	});
	res.json({ success: true, data: response })

}

controller.test = (req, res) => {
	const data = {
		name: "Afrin",
		city: "Chemnitz",
		age: "n/a"
	}

	console.log("Execute from controller");
	res.json(data);
}

controller.bulkCreate = async (req, res) => {

	const { dataAry } = req.body;
	const data = await Student.bulkCreate(dataAry)
		.then(function (data) {
			return data;
		})
		.catch(error => {
			console.log("Error happened " + error)
			return error;
		})

	res.status(200).json({
		success: true,
		message: "Student Data Saved Successfully!!",
		data: data
	});
}

controller.list = async (req, res) => {
	const data = await Student.findAll({

	}).then(function (data) {
		return data;
	}).catch(error => {
		return error;
	})

	res.json({ success: true, data: data });
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

controller.testdata1 = async (req, res) => {

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