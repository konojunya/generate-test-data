<?php

namespace App\api_utils;
use Faker;

class Factory{

	public function __construct($tableName){
		$this->tableName = $tableName;
		$this->faker = Faker\Factory::create("ja_JP");
	}

	/*
	*		getFakeData
	*		jsからjavascriptObjectの形で受け取り他のメソッドへ流す
	*		@param { Array } rawDataObject
	*		@return { String } row_data PHPのオブジェクトなのでsql文へ変換する
	*/
	public function getFakeData($rawDataObject){
		error_log(print_r($rawDataObject,true),"3","./req.log");
		$row_data = $this->getFakerRow($rawDataObject);
		return $this->convert_to_sql($row_data);
	}

	/*
	*		getFakerRow
	*		javascriptObjectのtypeからfakerを通して値を取得する
	*		@param { Array } rawDataArray
	*		@return { Array } return_row
	*/
	private function getFakerRow($rawDataArray){
		foreach ($rawDataArray as $key => $value):
			error_log(print_r($key,true),"3","./req.log");
			$return_row[$key] = array(
				'fieldName' => $value['fieldName'],
				'value' => $this->faker->$value['type']
			);
		endforeach;
		error_log(print_r($return_row,true),"3","./req.log");
		return $return_row;
	}

	/*
	*		convert_to_sql
	*		@param { Array } rawDataObject
	*		@return { String } sql sql文にして返却する
	*/
	private function convert_to_sql($rawDataObject){
		$keyArray = [];
		$valueArray = [];
		
		foreach($rawDataObject as $key => $value):
			$value = $rawDataObject[$key]["value"];
			$keyArray[] = $rawDataObject[$key]["fieldName"];
			$valueArray[] = gettype($value) === "integer" ? $value : "'".$value."'";
		endforeach;

		$sql = "insert into '{$this->tableName}' (".join(",",$keyArray).") values (".join(",",$valueArray).");";
		return $sql;
	}

}