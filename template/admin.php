<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Панель администратора</h1>

    <div class="container">
        <form action="" method="post" class="form">
        <h1>Форма добавления пользователя</h1>
            <input type="text" name="fio" class=fio>
            <input type="text" name="login" class="login">
            <input type="password" name="pass" class="pass">
            <select name="" id="" class="selected">
                <option selected=true disabled=disabled>Выберите статус</option>
                <option>Врач кт</option>
                <option>Врач пульмонолог</option>
                <option>Ренген лаборант</option>
            </select>
            <input type="submit" value="Отправить" class="btn">
        </form>
    </div>

<script src="/js/admin.js"></script>
</body>
</html>