import React from "react"

export default class TableCell extends React.Component{

	render(){

		return(
			<tr className="list-item">
	      <td className="mdl-data-table__cell--non-numeric">
	      	<div className="mdl-textfield mdl-js-textfield">
				    <input className="mdl-textfield__input" type="text"/>
				    <label className="mdl-textfield__label">Text...</label>
				  </div>
	      </td>
	      <td>
	      	<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
	      		name
	      	</button>
	      </td>
	      <td className="delete_btn">
	      	<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
	      		<i className="material-icons">clear</i>
	      	</button>
	      </td>
	    </tr>
		)
	}

}