import request from "superagent"

var appWebAPIUtils = {

	requestApi(state){
		request
			.post("http://localhost:8989/api.php")
			.send(this.convertToAjaxData(state))
			.end((err,res)=>{
				if(err) console.log(err)
				var json_data = JSON.parse(res.text);
				console.log(json_data)
				console.log("http://localhost:8989/download.php?target="+json_data.link)
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