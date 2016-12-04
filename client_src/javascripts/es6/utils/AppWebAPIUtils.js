import request from "superagent"

var appWebAPIUtils = {

	requestApi(state){
		console.log(this.convertToAjaxData(state))
		request
			.post("http://localhost:8989/api.php")
			.send(this.convertToAjaxData(state))
			.end((err,res)=>{
				if(err) console.log(err)
				console.log(res.text)
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