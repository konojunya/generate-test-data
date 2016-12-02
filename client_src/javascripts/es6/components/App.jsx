import React from "react"

import AppStore from "../stores/AppStore"
import AppActions from "../actions/AppActions"

import Header from "./Header.jsx"
import TableCell from "./TableCell.jsx"

var getAppState = () =>{
	return {
		allFields: AppStore.getAll()
	}
}

export default class App extends React.Component{

	constructor(props) {
		super(props);
		this.state = getAppState()
	}

	componentDidMount(){
		AppStore.addChangeListener(this._onChange)
	}

	componentWillUnmount(){
		AppStore.removeChangeListener(this._onChange)
	}

	render(){

		var list = [],
				allFields = this.state.allFields;

		for(var key in allFields){
			list.push(<TableCell key={key} field_data={allFields[key]} destroy_action={this._destroy}/>)
		}

		return(
			<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
				<Header/>
			  <main className="mdl-layout__content">
			    <div className="page-content">

			    	<div className="table">
				    	<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp" id="table">
							  <thead>
							    <tr>
							      <th className="mdl-data-table__cell--non-numeric">Field Name</th>
							      <th>Type</th>
							    </tr>
							  </thead>
							  <tbody>

							  	{list}

							  </tbody>
							</table>
							<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent add_btn" onClick={this._create}>
								Add Field
							</button>
						</div>

				    <div className="settings">
						  <div className="mdl-textfield mdl-js-textfield call-count-box">
						    <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="callCount"/>
						    <label className="mdl-textfield__label" htmlFor="callCount">call count...</label>
						  </div>
				    	<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored download_btn" onClick={this._download}>download</button>
				    	<button className="mdl-button mdl-js-button mdl-js-ripple-effect preview_btn" onClick={this._preview}>preview</button>
				    </div>

			    </div>
			  </main>
			</div>
		)
	}

	_create = () => {
		AppActions.create()
	}

	_destroy = (id) => {
		AppActions.destroy(id);
	}

	_download = () => {
		console.log("download button")
	}

	_preview = () => {
		console.log("preview button")
	}

	_onChange = () => {
		this.setState(getAppState())
	}

}