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
<div class="container">
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar-fixed-top">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.php">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="simple-ajax.php">Ajax Array</a>
                    </li>
                </ul>
            </div>
        </nav>
