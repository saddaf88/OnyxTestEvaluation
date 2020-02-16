const express = require('express');
const router = express.Router();
const testScoreController = require('../controllers/TestScoreController');

// router.get('/list', employeeControler.list);
// router.get('/get/:id', employeeControler.get);

// router.get('/datatest', employeeControler.testdata);
// router.get('/test', employeeControler.test);
// router.get('/GetAllData', employeeControler.GetAllData);

// router.get('/save', (req, res) => {
// 	res.json({ status: "The Employee is saved" })
// });

router.get('/', (req, res) => {
	res.json({ position: "Came to test Score Route" })
})

module.exports = router;