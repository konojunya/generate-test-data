<?php
require "vendor/autoload.php";

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
$app = new App\api_utils\Factory($tableName,$callCount);

$return_data = $app->getFakeData($reqData);
$sql_text = "";
foreach($return_data as $value){
	$sql_text .= $value."\n";
}
$key = uniqid("file_");
file_put_contents("./download_files/".$key.".sql",$sql_text);
echo json_encode(array(
	"link" => $key,
	"sql" => $return_data
));
exit;