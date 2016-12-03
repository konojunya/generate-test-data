import request from 'superagent';

var appWebAPIUtils = {

	requestApi(state){
		request
			.post("../../api.php")
			.send(this.convertToAjaxData(state))
			.end((err,res)=>{
				if(err) console.log(err)
				console.log(res)
			})
	},

	convertToAjaxData(state){
		var data = {
			reqData: [],
			callCount: state.count,
			tableName: state.tableName 	
		}
		for(var key in state.reqData){
			data.reqData.push(state.reqData[key])
		}
		return data;
	}

}

export default appWebAPIUtils;