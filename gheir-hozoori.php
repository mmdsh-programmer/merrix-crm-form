<?php
header('Content-Type: text/html; charset=utf-8');
$servername = "localhost";
$username = "merrixc2_addlead";
$password = "BwoF5JIczo";
$db = "merrixc2_addlead";
$conn = mysqli_connect($servername, $username, $password, $db);
mysqli_set_charset($conn, "utf8");
$email = $_POST['email'];
$store_name = $_POST['store_name'];
$landline = $_POST['landline'];
$phone = $_POST['phone'];
$province = $_POST['province'];
$city = $_POST['city'];
$address = $_POST['address'];
$area = $_POST['area'];
$job = $_POST['job'];
$instagram = $_POST['instagram'];
$telegram = $_POST['telegram'];
$whatsapp = $_POST['whatsapp'];
$description = $_POST['description'];
$website = $_POST['website'];
$clue = $_POST['clue'];
$service_type = $_POST['service_type'];
$lat = $_POST['lat'];
$lng = $_POST['lng'];
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
    $sql = "INSERT INTO `gheir_hozoori`(`user_email`,`shop_name`,`landline`,`phone`,`province`,`city`,`area`,`address`,`job`,`instagram`,`telegram`,`whatsapp`,`description`,`website`,`clue`,`service_type`,`lat`,`lng`) 
        VALUES ('$email', '$store_name', '$landline', '$phone', '$province', '$city', '$area', '$address', '$job', '$instagram', '$telegram', '$whatsapp', '$description', '$website', '$clue', '$service_type', '$lat', '$lng')";
    if (mysqli_query($conn, $sql)) {
        echo json_encode(array("statusCode" => 200));
    } else {
        echo json_encode(array("statusCode" => 400));
    }
}
mysqli_close($conn);
?>