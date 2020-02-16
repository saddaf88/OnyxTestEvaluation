import React from 'react';
import XLSX from 'xlsx'
import $ from 'jquery'
import axios from 'axios'
///import { useHistory } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const SheetJSFT = [
	"xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(function (x) { return "." + x; }).join(",");

class EditComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			testName: '',
			studentList: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleFile = this.handleFile.bind(this);
		this.exportFile = this.exportFile.bind(this);
		this.saveStudent = this.saveStudent.bind(this);
		this.checkStudent = this.checkStudent.bind(this);
	};

	handleChange(e) {
		const files = e.target.files;
		if (files && files[0]) this.handleFile(files[0]);
	};

	saveStudent() {
		const baseUrl = "http://localhost:3000/students/bulkInsert"
		var datapost = { dataAry: this.state.data }
		debugger;
		var obj = this;
		axios.post(baseUrl, datapost)
			.then(response => {

				if (response.data.success === true) {
					alert(response.data.message);
					obj.props.history.push("/");
				}
				else {
					alert(response.data.message)
				}
			}).catch(error => {
				alert("Error 34 " + error)
			})
	}

	checkStudent() {

		const baseUrl = "http://localhost:3000/students/findall";
		var obj = this;
		axios.get(baseUrl).then(res => {
			if (res.data.success) {
				const data = res.data.data;
				debugger;
				if (!data.length) {
					obj.saveStudent();
				} else {
					var props = ['registrationNo'];
					var result = data.filter(function (o1) {
						return !obj.state.data.some(o2 => o1.registrationNo === o2.registrationNo &&
							o1[obj.state.testName] === o2[obj.state.testName].toString())
					}).map(function (o) {
						return props.reduce(function (newo, name) {
							newo[name] = o[name];
							return newo;
						}, {});
					});
					if (result.length) {
						var flag = 0;
						result.forEach(resItem => {
							var resultobj = obj.state.data.filter(item => item.registrationNo === resItem.registrationNo)
							console.log(resultobj[0][obj.state.testName])
							var regNo = resultobj[0].registrationNo;

							const baseUrl = "http://localhost:3000/Students/update/" + regNo;

							const datapost = {
								testinfo: { [obj.state.testName]: resultobj[0][obj.state.testName] }
							}
							axios.post(baseUrl, datapost)
								.then(response => {
									if (response.data.success === true) {
										flag = flag + 1
										if (result.length === flag) {
											alert(response.data.message);
											obj.props.history.push("/");
										}
									}
									else {
										alert("Error")
									}
								}).catch(error => {
									alert("Error 34 " + error)
								})
						})

					} else {
						alert("This data is already inserted. Choose another file.")
						obj.props.history.push("/");
					}
				}

				this.setState({ studentList: data });
			} else {
				alert("Error happened!!");
			}
		}).catch(error => {
			alert("Error in server!! " + error);
		})
	}

	exportFile() {
		this.checkStudent();
	}

	handleFile(file/*:File*/) {

		const reader = new FileReader();
		const rABS = !!reader.readAsBinaryString;
		var testName = file.name.split('_')[1] + file.name.split('_')[2];


		reader.onload = (e) => {

			const bstr = e.target.result;
			const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array' });

			const wsname = wb.SheetNames[0];
			const ws = wb.Sheets[wsname];

			const data = XLSX.utils.sheet_to_json(ws, { header: 1 });

			var dataToSave = [];
			var indxName = data[0];

			debugger;
			data.forEach((value, indx) => {
				var obj = {};
				if (indx) {
					value.forEach((val, idx) => {
						if (indxName[idx] === "Institution identifier (registration number)") {
							obj.registrationNo = val;
						}
						if (indxName[idx] === "Last name") {
							obj.lastName = val;
						}
						if (indxName[idx] === "First name") {
							obj.firstName = val;
						}
						if (indxName[idx] === "Email") {
							obj.email = val;
						}
						if (indxName[idx] === "Faculty / Department") {
							obj.faculty = val;
						}
						if (indxName[idx] === "Semester") {
							obj.semester = val;
						}
						if (indxName[idx] === "Field of studies") {
							obj.fieldOfStudies = val;
						}
						if (indxName[idx] === "Institution") {
							obj.institution = val;
						}
						if (indxName[idx] === "Score") {
							testName = testName.charAt(0).toLowerCase() + testName.slice(1)
							obj[testName] = val;
						}
					});

					dataToSave.push(obj);
				}
			})

			this.setState({ data: dataToSave, testName: testName });
		};
		if (rABS) reader.readAsBinaryString(file); else reader.readAsArrayBuffer(file);
	};

	componentDidMount() {
		$('#inputGroupFile02').on('change', function () {
			var fileName = $(this).val().replace('C:\\fakepath\\', " ");
			$(this).next('.custom-file-label').html(fileName);
		})
	}

	render() {

		return (
			<div>
				<div className="row">
					<div className="col-xs-12">
						<div class="input-group mb-3">
							<div class="input-group-prepend">
								<span class="input-group-text">Student Excel File</span>
							</div>
							<div class="custom-file">
								<input type="file" class="custom-file-input"
									id="inputGroupFile02"
									accept={SheetJSFT} onChange={this.handleChange} />
								<label class="custom-file-label" for="inputGroupFile02">Choose File</label>
							</div>
						</div >
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<button disabled={!this.state.data.length} className="btn btn-success"
							onClick={this.exportFile}>Process</button>
					</div>
				</div>

			</div>
		);
	}
}



export default EditComponent;