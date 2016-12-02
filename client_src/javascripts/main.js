(function($){

	$(".connection_btn").on("click",function(){
		connection()
	})

	$("#sortable").sortable({
		revert: false
	});
	$("#sortable tr").disableSelection();


	/*
	*		connection
	*		Ajaxを用いて通信
	*		@oaram { string } type
	*/
	function connection(type){
		type = type || "hoge"

		$.ajax({
			url: "api.php",
			type: "POST",
			data: {
				reqData: [
					{ fieldName: "name", type: "name" },
					{ fieldName: "passwd", type: "password" },
					{ fieldName: "age", type: "randomDigit" }
				],
				callCount: 10,
				tableName: "MOCK"
			}
		})
		.fail(function(err){
			console.log(err)
		})
		.done(function(data){
			data = JSON.parse(data)
			if(data.sql !== undefined || data.sql.length > 0){
				for(var i = 0; i < data.sql.length; i++){
					console.log(data.sql[i])
				}
			}
		})
	}

})(jQuery)