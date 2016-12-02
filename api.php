<?php

require_once "vendor/autoload.php";

$app = new App\api_utils\Factory("mock_data");

$reqData = $_POST["reqData"];
$callCount = $_POST["callCount"];

$sql_text = [];

for($i=0;$i<$callCount;$i++){
	$sql_text[] = $app->getFakeData($reqData);
}

echo json_encode(array(
	"sql" => $sql_text
));