<?php
	$emailFrom = "alanazak8@gmail.com";
	$emailTo = Trim(stripslashes($_POST["email"]));
	$name = Trim(stripslashes($_POST["name"]));
	$subject = "From Website";
	$message = Trim(stripslashes($_POST["message"]));
	$emailBody = "Name: $name \n Email: $emailTo \n Phone: $phoneNum \n Browsers Used: \n $chromeCB \n $firefoxCB \n $safariCB \n $ieCB \n $edgeCB \n\n Favorite Browser: $radioCB \n\n Message: \n $message \n";

	mail($emailTo, "Email to you", $emailBody, "From:<$emailFrom>");
	header("Location: success.html");
	exit;
?>