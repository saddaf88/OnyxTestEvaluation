const express = require('express');
const app = express();
app.set('port', process.env.POST || 3000);

app.use(express.json());


app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});


const studentRoutes = require('./routes/StudentRoute');
// const testScoreRoutes = require('./routes/TestScoreRoute');

// app.use('/testscore', testScoreRoutes)
app.use('/students', studentRoutes);


app.use('/', (req, res) => {
	res.send("This is for Onyx Test Evaluation");
	//console.log("Hi")
})

app.use('/test1', (req, res) => {
	console.log("test route")
	res.send("Test route");
});

app.listen(app.get('port'), () => {
	console.log("Start server");
})