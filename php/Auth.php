<?php
require_once 'connect.php';
session_start();

$inputJSON = file_get_contents('php://input');

if($inputJSON !==null){
    $result = json_decode($inputJSON,true);

    $array = array_values($result);
    $login = $array[0];
    $pass = $array[1];
}else{
    return false;
}
$sql = mysqli_query($link,"SELECT * FROM `doctors` WHERE `login`='$login' and `password`='$pass'");
$row = mysqli_fetch_assoc($sql);
    $json = array('login'=>$row['login'],'password'=>$row['password'],'position'=>$row['position']);
    if($row['login']==$login && $row['password']==$pass){
        $_SESSION['login']=$row['login'];
        $_SESSION['position'] = $row['position'];
    }
echo json_encode($json);
?>