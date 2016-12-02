<?php

namespace App\api_utils;
use Faker;

class Factory{

	public function __construct($tableName){
		$this->tableName = $tableName;
		$this->faker = Faker\Factory::create("ja_JP");
	}

	public function getFakeData($rawDataObject){
		$row_data = $this->getFakerRow($rawDataObject);
		return $this->convert_to_sql($row_data);
	}

	private function getFakerRow($rawDataArray){
		foreach ($rawDataArray as $key => $value):
			$return_row[$key] = array(
				'fieldName' => $value['fieldName'],
				'value' => $this->faker->$value['type']
			);
		endforeach;
		return $return_row;
	}

	private function convert_to_sql($rawDataObject){
		$keyArray = [];
		$valueArray = [];
		
		foreach($rawDataObject as $key => $value):
			$value = $rawDataObject[$key]["value"];
			$keyArray[] = $rawDataObject[$key]["fieldName"];
			$valueArray[] = gettype($value) === "integer" ? $value : "'".$value."'";
		endforeach;

		return "insert into '{$this->tableName}' (".join(",",$keyArray).") values (".join(",",$valueArray).");";
	}

}