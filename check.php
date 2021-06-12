<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "naqabel1_addlead";
$password = "zHl1IUdhkt";
$db = "naqabel1_addlead";
$conn = mysqli_connect($servername, $username, $password, $db);
mysqli_set_charset($conn, "utf8");
$landline = $_POST['landline'];
$phone = $_POST['phone'];
$instagram = $_POST['instagram'];
$telegram = $_POST['telegram'];
$website = $_POST['website'];
$duplicateLandLine = mysqli_query($conn, "select * from gheir_hozoori where landline='$landline' and landline<>''");
$duplicatePhone = mysqli_query($conn, "select * from gheir_hozoori where phone='$phone' and phone<>''");
$duplicateInstagram = mysqli_query($conn, "select * from gheir_hozoori where instagram like '%".$instagram."%' and instagram<>''");
$duplicateTelegram = mysqli_query($conn, "select * from gheir_hozoori where telegram='$telegram' and telegram<>''");
$duplicateWebsite = mysqli_query($conn, "select * from gheir_hozoori where website='$website' and website<>''");
if (mysqli_num_rows($duplicateLandLine) > 0) {
    echo json_encode(array("statusCode" => 201));
} else if (mysqli_num_rows($duplicatePhone) > 0) {
    echo json_encode(array("statusCode" => 202));
} else if (mysqli_num_rows($duplicateInstagram) > 0) {
    echo json_encode(array("statusCode" => 203));
} else if (mysqli_num_rows($duplicateTelegram) > 0) {
    echo json_encode(array("statusCode" => 204));
} else if (mysqli_num_rows($duplicateWebsite) > 0) {
    echo json_encode(array("statusCode" => 206));
} else {
    echo json_encode(array("statusCode" => 200));
}
mysqli_close($conn);
