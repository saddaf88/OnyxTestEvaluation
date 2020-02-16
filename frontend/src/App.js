import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import studetnForm from './module/form';
import List from './module/list';
import Edit from './module/edit';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {

	return (
		<Router>
			<div className="App">

				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<a class="navbar-brand" href="#" style={{ color: '#2980b9', fontWeight: 'bold' }}>Onyx Test Evaluation</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item active">
								<a class="nav-link" > Student List </a>

							</li>
						</ul>
						{/* <a class="btn  " href="/form">Add Student</a> */}
						<Link class="btn btn-info" to="/studetnForm">Add Student</Link>
						{/* <a class="btn btn-info " href="/form">Add Student</a> */}
					</div>
				</nav>

				<div class="container py-4">
					<div class="row">

						<Route path="/" exact component={List} />
						<Route path="/studetnForm" component={studetnForm} />
						<Route path="/edit/:employeeId" component={Edit} />

					</div>
				</div>

			</div>
		</Router>
	);
}

export default App;
