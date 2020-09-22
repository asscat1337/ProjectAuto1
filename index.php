<?php include('template/header.php');?>
    <?php include('template/menu.php');?>
<?php
    if($_SESSION['position']=="Ренген лаборант"){
        include('template/laborant.php');
    } if($_SESSION['position']=="Врач кт"){
        include('template/doctor.php');
    }
    if($_SESSION['position']=="Врач пульмонолог"){
        include('template/doctorPulmo.php');
    }
?>