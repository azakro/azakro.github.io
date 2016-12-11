
<?php
	$emailFrom = Trim(stripslashes($_POST["email"]));
	$emailTo = "alanazak8@gmail.com";
	$name = Trim(stripslashes($_POST["name"]));
	$message = Trim(stripslashes($_POST["message"]));
	$emailBody = "Name: $name \n Email: $emailTo \n\n Message: \n $message \n";

	mail($emailTo, "From personal website", $emailBody, "From:<$emailFrom>");
	header('Location: success.html');
?>