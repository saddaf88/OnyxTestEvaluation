import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery'

const SheetJSFT = [
	"xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(function (x) { return "." + x; }).join(",");

export default class formComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			fileName: ""
		}
		this.exportFile = this.exportFile.bind(this);
	}

	exportFile() {
		alert("i am from export file");
	}

	componentDidMount() {
		$('#inputGroupFile02').on('change', function () {
			debugger;
			//get the file name
			var fileName = $(this).val().replace('C:\\fakepath\\', " ");

			//replace the "Choose a file" label
			$(this).next('.custom-file-label').html(fileName);
		})
	}

	render() {
		return (
			<form>
				<div className="row">
					<div className="col-xs-12">
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text">Excel file</span>
							</div>
							<div className="custom-file">
								<input type="file" className="custom-file-input" id="inputGroupFile02" accept={SheetJSFT} onChange={this.handleChange} />
								<label className="custom-file-label" htmlFor="inputGroupFile02">Choose File</label>

							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<button className="btn btn-success"
							onClick={this.exportFile}>Process</button>
					</div>
				</div>
			</form>
		)
	}
}