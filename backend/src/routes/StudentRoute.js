const express = require('express');
const router = express.Router();
const studentController = require('../controllers/StudentController');

// router.get('/list', employeeControler.list);
// router.get('/get/:id', employeeControler.get);

// router.get('/bulkCreate', employeeControler.bulkCreate);

// router.get('/GetAllData', employeeControler.GetAllData);

// router.get('/save', (req, res) => {
// 	res.json({ status: "The Employee is saved" })
// });

router.get('/', (req, res) => {
	res.json({ position: "Came to student route" })
})
router.get('/test', studentController.test);


router.post('/testdata', studentController.testdata)
router.post('/bulkInsert', studentController.bulkCreate)
router.get('/findall', studentController.list)
router.post('/update/:registrationNo', studentController.update);


module.exports = router;