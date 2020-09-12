<!DOCTYPE html>
<html>
<head>
<h1> Search photos</h1>
      
    </head>
    <body>
	<img src="getphotos.php? width="175" height="200" />

        
        <form action="getphotos.php" method="post">

<fieldset>
	<input type=text name="title" placeholder="Title"><br/><br/>
	<input type=text name="key" placeholder="Keywords"></br></br>
	<input type=date name="date" placeholder="Date"></br></br>

<input type=submit name="search" value= "search">
</fieldset>
  </form>
 
<?php
	/*
			This is a template for SQL query such as
			- SELECT
	*/
	require_once "get.php";	// Load MySQL log in credentials
	$conn = mysqli_connect($host,$user,$pwd,$sql_db);	// Log in and use database
	if ($conn) {  // check is database is avialable for use
		$title= $_POST['title'];
		$key = $_POST['key'];
		$date = $_POST['date'];
		if(isset($_POST('search'))){
			
	
		$query = "select * FROM photos ";	// Assign appropriate query here
		$result = mysqli_query ($conn, $query);
		if ($result) {								// check if query was successfully executed
			$record = mysqli_fetch_assoc ($result);
			if ($record) {
				$content = $row['Reference'];
	header('Content-type: image/jpeg')
	echo $content;				// check if any record exists
			} 
		else {
				echo "<p>No records retrieved.</p>";
			}
		
		}		else {
			echo "<p>MySQL operation unsuccessful.</p>";
		}
		}
		mysqli_close ($conn);			// Close the database connect
	 else {
		echo "<p>Unable to connect to the database.</p>";
	}
	}
?>
</body>
</html>