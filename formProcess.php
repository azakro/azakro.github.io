
<?php
	$emailFrom = Trim(stripslashes($_POST["email"]));
	$emailTo = "alanazak8@gmail.com";
	
	function died($error) {
 
        // your error code can go here
 
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
 
        echo "These errors appear below.<br /><br />";
 
        echo $error."<br /><br />";
 
        echo "Please go back and fix these errors.<br /><br />";
 
        die();
 
    }

	$name = Trim(stripslashes($_POST["name"]));
	$message = Trim(stripslashes($_POST["message"]));
	$emailBody = "Name: $name \n Email: $emailTo \n\n Message: \n $message \n";

	mail($emailTo, "From personal website", $emailBody, "From:<$emailFrom>");
	
	header('Location: success.html');

 
?>