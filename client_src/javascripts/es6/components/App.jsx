import React from "react"

import AppStore from "../stores/AppStore"
import AppActions from "../actions/AppActions"

import Header from "./Header.jsx"
import TableCell from "./TableCell.jsx"
import Overlay from "./Overlay.jsx"

import appWebAPIUtils from "../utils/AppWebAPIUtils"

var getAppState = () =>{
	return AppStore.getAll()
}

export default class App extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			allFields: getAppState(),
			callCount: 10,
			tableName: "MOCK_TABLE",
			isShowOverlay: false
		}
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
			list.push(
				<TableCell
					key={key}
					field_data={allFields[key]}
					toggleOverlay={this._toggleOverlay}
					isShowFlg={this.state.isShowOverlay}
				/>
			)
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
							      <th></th>
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
								<label htmlFor="tableName">Table Name</label>
						    <input className="mdl-textfield__input" type="text" id="tableName" value={this.state.tableName} placeholder="MOCK_TABLE" onChange={this._changeTableName}/>
						  </div>
						  <div className="mdl-textfield mdl-js-textfield call-count-box">
						  	<label htmlFor="callCount">Rows</label>
						    <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="callCount" value={this.state.callCount} placeholder="10" onChange={this._changeCallCount}/>
						  </div>
						</div>
				    <div className="settings">
				    	<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored download_btn" onClick={this._download}>download</button>
				    	<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect preview_btn" onClick={this._preview}>preview</button>
				    </div>

			    </div>
			  </main>

			  <Overlay show={this.state.isShowOverlay} toggleOverlay={this._toggleOverlay}/>

			</div>
		)
	}

	_create = () => {
		AppActions.create()
	}

	_download = () => {
		console.log("download button")
	}

	_preview = () => {
		var data = {
			reqData: this.state.allFields,
			count: this.state.callCount,
			tableName: this.state.tableName
		}
		appWebAPIUtils.requestApi(data);
	}

	_changeCallCount = (e) => {
		this.setState({
			callCount: e.target.value
		})
	}

	_changeTableName = (e) => {
		this.setState({
			tableName: e.target.value
		})
	}

	_toggleOverlay = (flg) => {
		this.setState({
			isShowOverlay: flg
		})
	}

	_onChange = () => {
		this.setState(getAppState())
	}

}