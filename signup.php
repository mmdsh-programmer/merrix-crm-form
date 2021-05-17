<?php
$servername = "localhost";
$username = "h130783_form";
$password = "Mmd920517410@";
$db = "h130783_form";
$conn = mysqli_connect($servername, $username, $password, $db);
if ($_POST['type'] == 1) {
	$email = $_POST['email'];
	$password = $_POST['password'];
	$duplicate = mysqli_query($conn, "select * from users where user_email='$email'");
	if (mysqli_num_rows($duplicate) > 0) {
		echo json_encode(array("statusCode" => 201));
	} else {
		$sql = "INSERT INTO `users`(`user_email`,`user_password`) 
			VALUES ('$email', '$password')";
		if (mysqli_query($conn, $sql)) {
			echo json_encode(array("statusCode" => 200));
		} else {
			echo json_encode(array("statusCode" => 201));
		}
	}
	mysqli_close($conn);
}
if ($_POST['type'] == 2) {
	$email = $_POST['email'];
	$password = $_POST['password'];
	$check = mysqli_query($conn, "select * from users where user_email='$email' and user_password='$password'");
	if (mysqli_num_rows($check) > 0) {
		echo json_encode(array("statusCode" => 200));
	} else {
		echo json_encode(array("statusCode" => 201));
	}
	mysqli_close($conn);
}
?>