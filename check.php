<?php
header('Content-Type: text/html; charset=utf-8');
$servername = "localhost";
$username = "merrixc2_addlead";
$password = "BwoF5JIczo";
$db = "merrixc2_addlead";
$conn = mysqli_connect($servername, $username, $password, $db);
mysqli_set_charset($conn, "utf8");
$landline = $_POST['landline'];
$phone = $_POST['phone'];
$instagram = $_POST['instagram'];
$telegram = $_POST['telegram'];
$whatsapp = $_POST['whatsapp'];
$duplicateLandLine = mysqli_query($conn, "select * from gheir_hozoori where landline='$landline' and landline<>''");
$duplicatePhone = mysqli_query($conn, "select * from gheir_hozoori where phone='$phone' and phone<>''");
$duplicateInstagram = mysqli_query($conn, "select * from gheir_hozoori where instagram='$instagram' and instagram<>''");
$duplicateTelegram = mysqli_query($conn, "select * from gheir_hozoori where telegram='$telegram' and telegram<>''");
$duplicateWhatsapp = mysqli_query($conn, "select * from gheir_hozoori where whatsapp='$whatsapp' and whatsapp<>''");
if (mysqli_num_rows($duplicateLandLine) > 0) {
    echo json_encode(array("statusCode" => 201));
} else if (mysqli_num_rows($duplicatePhone) > 0) {
    echo json_encode(array("statusCode" => 202));
} else if (mysqli_num_rows($duplicateInstagram) > 0) {
    echo json_encode(array("statusCode" => 203));
} else if (mysqli_num_rows($duplicateTelegram) > 0) {
    echo json_encode(array("statusCode" => 204));
} else if (mysqli_num_rows($duplicateWhatsapp) > 0) {
    echo json_encode(array("statusCode" => 205));
} else {
    echo json_encode(array("statusCode" => 200));
}
mysqli_close($conn);