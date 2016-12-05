<?php

namespace App\api_utils;
use Faker;

class Factory{

	public function __construct($tableName,$callCount){
		$this->tableName = $tableName;
		$this->callCount = $callCount;
		$this->faker = Faker\Factory::create("ja_JP");
		$this->sql_text = [];
	}

	/*
	*		getFakeData
	*		jsからjavascriptObjectの形で受け取り他のメソッドへ流す
	*		@param { Array } rawDataObject
	*		@return { String } row_data PHPのオブジェクトなのでsql文へ変換する
	*/
	public function getFakeData($rawDataObject){
		for($i=0;$i<$this->callCount;$i++){
			$sql_text[] = $this->convert_to_sql($this->getFakerRow($rawDataObject));
		}
		return $sql_text;
	}

	/*
	*		getFakerRow
	*		javascriptObjectのtypeからfakerを通して値を取得する
	*		@param { Array } rawDataArray
	*		@return { Array } return_row
	*/
	private function getFakerRow($rawDataArray){
		$return_row = array();
		foreach ($rawDataArray as $value):
			$name = $value->type;
			$return_row[] = array(
				'fieldName' => $value->fieldName,
				'value' => $this->faker->$name
			);
		endforeach;
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