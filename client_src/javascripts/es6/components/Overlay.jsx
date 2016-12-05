import React from "react"
import AppActions from "../actions/AppActions"
import AppStore from "../stores/AppStore"

var getCurrentTableId = () => {
	return AppStore.getCurrentTableId()
}

export default class Overlay extends React.Component{

	constructor(props){
		super(props)
	}

	render(){

		return(
			<div className={`overlay ${this.props.show ? '' : 'hidden'}`}>
				<div className="type-menu">
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="name">name</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="userName">userName</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="password">password</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="email">email</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="freeEmail">freeEmail</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="userName">userName</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="domainName">domainName</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="url">url</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="ipv4">ipv4</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="ipv6">ipv6</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="macAddress">macAddress</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="phoneNumber">phoneNumber</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="randomDigitNotNull">randomDigitNotNull</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="realText">realText</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="userAgent">userAgent</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="creditCardNumber">creditCardNumber</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="hexcolor">hexcolor</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="rgbcolor">rgbcolor</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="colorName">colorName</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="uuid">uuid</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="sha1">sha1</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="imageUrl">imageUrl</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="company">company</button>
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this._changeFieldType} data-fieldType="address">address</button>
				</div>
			</div>
		)

	}

	_changeFieldType = (e) => {
		AppActions.update_field_type(getCurrentTableId(),e.target.parentNode.dataset.fieldtype)
		this.props.toggleOverlay(!this.props.show)
	}

}