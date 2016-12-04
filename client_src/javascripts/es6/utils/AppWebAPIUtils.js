import request from "superagent"

var appWebAPIUtils = {

	requestApi(state){
		request
			.post("http://localhost:8989/api.php")
			.send(this.convertToAjaxData(state))
			.set('Content-Type', 'application/x-www-form-urlencoded')
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
			data.reqData.push({
				fieldName: state.reqData[key].fieldName,
				type: state.reqData[key].type
			})
		}
		return data;
	}

}

export default appWebAPIUtils;