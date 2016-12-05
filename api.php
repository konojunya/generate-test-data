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

先輩。昨日のやつなんですけどform dataで送ることで一旦解決していたんですが、そうしてしまうと
[ {data: "aaa"},{data: "bbb"} ] というようなデータをおくりたいときに、data="aaa"?data="bbb"になってしまって、上書きされてしまいます。なのでContent-Typeはapplication/jsonで送って、phpの取得時に$_POSTでは取得できない生のPOSTデータを取得する必要がありました。
取得方法としてはphp://inputをfile_get_contentsで取得してこの形はjsのobjectの形（{name: "hoge",age: 19}）になっているので、json_decode()を使ってデコードしないと行けなかったです。

$php_input = 
$json_data = json_decode(file_get_contents("php://input"))