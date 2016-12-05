import React from "react"
import AppActions from "../actions/AppActions"

export default class TableCell extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			value: ""
		}
	}

	render(){

		return(
			<tr className="list-item">
	      <td className="mdl-data-table__cell--non-numeric">
	      	<div className="mdl-textfield mdl-js-textfield">
				    <input className="mdl-textfield__input" type="text" onChange={this._onChangeFieldName} value={this.state.value} autoFocus={true} data-id={this.props.field_data.id}/>
				  </div>
	      </td>
	      <td>
	      	<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" data-id={this.props.field_data.id} onClick={this._toggleOverlay} data-type={this.props.field_data.type}>
	      		{this.props.field_data.type}
	      	</button>
	      </td>
	      <td className="delete_btn">
	      	<button className="mdl-button mdl-js-button mdl-js-ripple-effect" onClick={this._destory} data-id={this.props.field_data.id}>
	      		<i className="material-icons">clear</i>
	      	</button>
	      </td>
	    </tr>
		)
	}

	_onChangeFieldName = (e) => {
		var _t = e.target
		this.setState({
			value: _t.value
		})
		AppActions.update_field_name(_t.dataset.id,_t.value)
	}

	_toggleOverlay = (e) => {
		this.props.toggleOverlay(!this.props.isShowFlg)
		AppActions.changeTableId(e.target.dataset.id)
	}

	_destory = (e) => {
		var target = e.target,
				id = target.dataset.id || target.parentNode.dataset.id;
		AppActions.destroy(id);
	}

}