<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $conn = new mysqli('localhost','root','','test')
    if($conn->connect_error) {
        die('Connection Failed ')
    }else{
        $stmt = $conn->prepare("insert into registration(name,phone,message) values(?,?,?");
        $stmt->execute();
        echo"registration successfully...";
        $stmt->close();
        $conn->close();
    }
?>