import AppDispatcher from "../dispatcher/AppDispatcher"
import AppConstants from "../constants/AppConstants"

var AppActions = {

	create(){
		AppDispatcher.dispatch({
			actionType: AppConstants.CREATE
		})
	}

	destroy(id){
		AppDispatcher.dispatch({
			actionType: AppConstants.DESTROY,
			id: id
		})
	}

	change_field_name(name){
		AppDispatcher.dispatch({
			actionType: AppConstants.CHANGE_FIELD_NAME,
			name: name
		})
	}

	change_field_type(type){
		AppDispatcher.dispatch({
			actionType: AppConstants.CHANGE_FIELD_TYPE,
			type: type
		})
	}
}

export default AppActions