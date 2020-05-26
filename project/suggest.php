<?php
//people array - TODO Get from API
$people = ["Steph", "Stephanie", "Stephany", "Cole", "Morgan", "Jacob", "Andrew", "Lauren", "Alex", "Tyler",
	"Taylor", "Chris", "Beth", "Bob", "Ann", "Jane", "Jin", "Walt", "Amber", "Dorothy", "Jim", "John"];


//Get Query String
$q = $_REQUEST['q'];

$suggestion = "";

//Get suggestions
if ($q !== ""){
	$q = strtolower($q);
	$length = strlen($q);
	foreach($people as $person){
		if(stristr($q, substr($person, 0, $length))){
			if($suggestion === ""){
				$suggestion = $person;
			} else {
				$suggestion .= " , $person";
			}
		}
	}
}

echo $suggestion === "" ? "No Suggestions" : $suggestion;
