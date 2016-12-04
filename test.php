<?php

header('Content-Type: application/json');

echo json_encode(array(
	"tableName" => $_POST["tableName"],
	"callCount" => $_POST["callCount"],
	"reqData" => $_POST["reqData"]
));