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

			    	<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp" id="table">
						  <thead>
						    <tr>
						      <th className="mdl-data-table__cell--non-numeric">Field Name</th>
						      <th>Type</th>
						    </tr>
						  </thead>
						  <tbody id="sortable">

						    <TableCell/>

						  </tbody>
						</table>

				    {/*<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent connection_btn">通信</button>*/}

			    </div>
			  </main>
			</div>
		)
	}

}