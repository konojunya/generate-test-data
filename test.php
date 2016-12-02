<?php

$array = [];
$array[] = array(
	"fieldName" => "name",
	"type" => "name"
);
$array[] = array(
	"fieldName" => "passwd",
	"type" => "password"
);

foreach($array as $i => $value_){
	foreach($value_ as $key => $value){
		echo $key."=>".$value.PHP_EOL;
	}
}