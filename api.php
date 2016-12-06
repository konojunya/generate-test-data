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
$key = ceil(microtime(true)*1000);
file_put_contents("./download_files/".$key.".sql",$sql_text);

/* file delete */
$res_dir = opendir("./download_files/");
while($file_name = readdir($res_dir)){
	if(!preg_match('/^(.|..)$/',$file_name)){
		preg_match('/^(\d+).sql$/', $file_name, $m);
		if(ceil(microtime(true)*1000) - $m[1] > 1000){
			unlink("./download_files/".$file_name);
		}
	}
}
closedir($res_dir);

echo json_encode(array(
	"link" => $key,
	"sql" => $return_data
));
exit;