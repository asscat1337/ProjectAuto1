
    <h1>Новые</h1>
    <div class="doctor__content">
        <div class="information__patient">
        <!-- <?php
                require_once './php/connect.php';
                $sql = mysqli_query($link,"SELECT * FROM `status`");
                $row = mysqli_fetch_array($sql);
                echo "<select class=status>";
                echo "<option selected=true disabled=disabled>Выберите статус</option>";
                do{
                    echo "<option id=".$row['id'].">".$row['status']."</option>";
                }
                while($row=mysqli_fetch_array($sql));
                echo "</select>";
           ?> -->
        </div>
    </div>
    <table class="table__result">
        <h1>Список обслуженных пациентов</h1>
       <tr>
        <th>ФИО</th>
        <th>Дата рождения</th>
        <th>Номер телефона</th>
       </tr>
       <?php
        require './php/connect.php';

        $sql = mysqli_query($link,"SELECT * from `arhive`");
        while($row = mysqli_fetch_assoc($sql)){
            echo "<tr data-id=$row[archive_id]><td>$row[fio]</td><td>$row[date]</td><td>$row[telephone]</td><td><button class=dowload><a href=$row[path]>Скачать файл</a></button></td><td>$row[filename]</td></tr>";
        }
        ?>
       </table>
    <script src="./js/doctor.js"></script>