import AppDispatcher from "../dispatcher/AppDispatcher"
import AppConstants from "../constants/AppConstants"

var AppActions = {

	create(){
		AppDispatcher.dispatch({
			actionType: AppConstants.CREATE
		})
	},

	destroy(id){
		AppDispatcher.dispatch({
			actionType: AppConstants.DESTROY,
			id: id
		})
	},

	update_field_name(id,name){
		AppDispatcher.dispatch({
			actionType: AppConstants.UPDATE_FIELD_NAME,
			id: id,
			name: name
		})
	},

	update_field_type(id,type){
		AppDispatcher.dispatch({
			actionType: AppConstants.UPDATE_FIELD_TYPE,
			id: id,
			type: type
		})
	},

	changeTableId(id){
		AppDispatcher.dispatch({
			actionType: AppConstants.UPDATE_TABLE_ID,
			id: id
		})
	}
}

export default AppActions