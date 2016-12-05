<?php

require_once "vendor/autoload.php";

header('Content-Type: application/json');

$php_input = file_get_contents('php://input');
$json_data = json_decode($php_input);

$tableName = $json_data->tableName;
$reqData = $json_data->reqData;
$callCount = $json_data->callCount;

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
