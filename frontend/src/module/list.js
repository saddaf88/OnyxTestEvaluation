import React from 'react';

import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class listComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			studentList: []
		}
	}

	componentDidMount() {
		const url = "http://localhost:3000/students/findall"
		axios.get(url).then(res => {
			if (res.data.success) {
				const data = res.data.data;
				this.setState({ studentList: data });
			} else {
				alert("Error happened!!");
			}
		}).catch(error => {
			alert("Error in server!! " + error);
		})
	}

	render() {
		return (
			<table class="table table-hover table-striped">
				<thead class="thead-dark">
					<tr>
						<th scope="col">Reg No.</th>
						<th scope="col">First Name</th>
						<th scope="col">Last Name</th>
						<th scope="col">Email</th>
						<th scope="col">Faculty</th>
						<th scope="col">Semester</th>
						<th scope="col">Institution</th>

						<th scope="col">Test 1</th>
						<th scope="col">Test 2</th>
						<th scope="col">Test 3</th>
						<th scope="col">Test 4</th>
						<th scope="col">Test 5</th>
					</tr>
				</thead>
				<tbody>

					{this.loadFillData()}
				</tbody>
			</table>
		);
	}
	loadFillData() {
		return this.state.studentList.map(data => {
			return (
				<tr>
					<th>{data.registrationNo}</th>
					<td>{data.firstName}</td>
					<td>{data.lastName}</td>
					<td>{data.email}</td>
					<td>{data.faculty}</td>
					<td>{data.semester}</td>
					<td>{data.fieldOfStudies}</td>

					<td>{data.test1}</td>
					<td>{data.test2}</td>
					<td>{data.test3}</td>
					<td>{data.test4}</td>
					<td>{data.test5}</td>

				</tr>
			)
		})
	}
}

export default listComponent;