<!--file data.php -->
<?php
	// get name and password passed from client
	$name = $_GET['name'];
	$pwd = $_GET['pwd'];
	$sleepTime = $_GET['sleepTime'];
	// sleep to slow server response down
	sleep($sleepTime);
	// write back the password concatenated to end of the name
	ECHO ($name." : ".$pwd)
?>
