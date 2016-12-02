<?php

require_once "vendor/autoload.php";

$tableName = $_POST["tableName"] || "mock_data";
$reqData = $_POST["reqData"];
$callCount = $_POST["callCount"];

/*
*		Factoryクラスを使用する
*		@param { String } テーブル名を入力する。	
*/
$app = new App\api_utils\Factory($tableName);

$sql_text = [];

/* 指定回数分コールしてSQL文の配列を生成する */
for($i=0;$i<$callCount;$i++){
	$sql_text[] = $app->getFakeData($reqData);
}

echo json_encode(array(
	"sql" => $sql_text
));