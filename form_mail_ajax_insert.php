<?
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');

    $DB_SERVER = "localhost";
    $DB_USER_NAME = "qkrguswls309"; 
    $DB_USER_PW = "guswls309^^";
    $DB_NAME = "qkrguswls309";

    $conn = mysqli_connect($DB_SERVER, $DB_USER_NAME, $DB_USER_PW, $DB_NAME);
    mysqli_set_charset($conn, 'utf8');

    $user_name = $_POST['이름'];
    $user_email = $_POST['이메일'];
    $user_message = $_POST['메시지'];
    $user_date = $_POST['날짜'];

    $sql = "INSERT INTO form_table(user_name, user_email, user_message, user_date) VALUES('$user_name', '$user_email', '$user_message', '$user_date')";

    $result = mysqli_query($conn, $sql);

    if ($result == true) {
        echo $user_name."님, 데이터저장 성공! 안녕하세요.";
    } else {
        echo "데이터저장 실패";
    }
?>