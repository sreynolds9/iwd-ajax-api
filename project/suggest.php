<?php
//people array - TODO Get from API
$people[] = "Bob";
$people[] = "Jackson";
$people[] = "Ann";
$people[] = "Julian";
$people[] = "Julio";
$people[] = "Beth";
$people[] = "Stephany";
$people[] = "Stephanie";


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
