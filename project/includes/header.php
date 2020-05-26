<?php
// NEEDS to come before any HTML is output
session_name( 'sreynolds_iwd_final' ); // make session name unique to this project
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <title><?= @$pageTitle ?: 'Default Site Name'; ?></title>
	<meta name="description" content="AJAX, API">
	<meta name="keywords" content="ajax, api, recipes">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="styles/styles.css" type="text/css" media="screen">

</head>

<body>
<header>
<div class="container-fluid">
<div class="container">
    <div class="row">
        <div class="col-1">
            <a href="https://i.gifer.com/8iqZ.gif" target="_blank"><img src="https://webstockreview.net/images/pineapple-clipart-kawaii-19.png"></a>
        </div>
        <div class="col-11">
            <nav>
            <ul>
                <li><a href="index.php">Spoontacular</a></li>
                <li><a href="simple-ajax.php">Ajax Array</a></li>
                <li><a href="google.php">Google Api</a></li>
            </ul>
            </nav>
        </div>
    </div>
</div>
</header>
<div class="main-content">
