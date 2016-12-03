import AppDispatcher from "../dispatcher/AppDispatcher"
import { EventEmitter } from "events"
import AppConstants from "../constants/AppConstants"
import assign from "object-assign"

const CHANGE_EVENT = "change";

var _fields = {};

var create = () => {
	var id = (+new Date() + ~(Math.random()*999999)).toString(36)
	_fields[id] = {
		id: id,
		type: "name",
		fieldName: ""
	}
}

var update = (id,updates) => {
	_fields[id] = assign({},_fields[id],updates)
}

var destroy = (id) => {
	delete _fields[id];
}

var AppStore = assign({},EventEmitter.prototype,{

	getAll(){
		return _fields
	},

	emitChange(){
		this.emit(CHANGE_EVENT)
	},

	addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

})

AppDispatcher.register((action)=>{

	switch(action.actionType){

		case AppConstants.CREATE:
			create()
			AppStore.emitChange()
			break;

		case AppConstants.DESTROY:
			destroy(action.id)
			AppStore.emitChange()
			break;

		case AppConstants.UPDATE_FIELD_NAME:
			var name = action.name.trim()
			if(name !== ""){
				update(action.id,{fieldName: name})
				AppStore.emitChange()
			}
			break;

		case AppConstants.UPDATE_FIELD_TYPE:
			var type = action.type.trim()
			if(type !== ""){
				update(action.id,{type: type})
				AppStore.emitChange()
			}
			break;

		default:
			console.log("switch miss")

	}

})

export default AppStore