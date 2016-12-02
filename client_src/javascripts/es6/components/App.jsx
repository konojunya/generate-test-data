import React from "react"

import Header from "./Header.jsx"
import TableCell from "./TableCell.jsx"

export default class App extends React.Component{

	render(){

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

							    <TableCell/>

							  </tbody>
							</table>
							<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent add_btn">
								Add Field
							</button>
						</div>

				    <div className="settings">
						  <div className="mdl-textfield mdl-js-textfield call-count-box">
						    <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="callCount"/>
						    <label className="mdl-textfield__label" for="callCount">call count...</label>
						  </div>
				    	<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored download_btn">download</button>
				    	<button className="mdl-button mdl-js-button mdl-js-ripple-effect preview_btn">preview</button>
				    </div>

			    </div>
			  </main>
			</div>
		)
	}

}