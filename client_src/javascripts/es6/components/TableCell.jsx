import React from "react"

export default class TableCell extends React.Component{

	render(){

		return(
			<tr className="list-item">
	      <td className="mdl-data-table__cell--non-numeric">
	      	<div className="mdl-textfield mdl-js-textfield">
				    <input className="mdl-textfield__input" type="text" onKeyDown={this._changeFieldName} value={this.props.field_data.name}/>
				    <label className="mdl-textfield__label">Text...</label>
				  </div>
	      </td>
	      <td>
	      	<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this._onChangeFieldType} data-type={this.props.field_data.type}>
	      		{this.props.field_data.type}
	      	</button>
	      </td>
	      <td className="delete_btn">
	      	<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._destory} data-id={this.props.field_data.id}>
	      		<i className="material-icons">clear</i>
	      	</button>
	      </td>
	    </tr>
		)
	}

	_changeFieldName = () => {
		console.log("change name")
	}

	_onChangeFieldType = () => {
		console.log("changeFieldType button")
	}

	_destory = (e) => {
		var target = e.target,
				id = target.dataset.id || target.parentNode.dataset.id;
		this.props.destroy_action(id)
	}

}