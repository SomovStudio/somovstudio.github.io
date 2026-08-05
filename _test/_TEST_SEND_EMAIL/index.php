<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

// Подключаем необходимые файлы PHPMailer
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Используем пространства имен
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

if (!empty($_POST['name'])) {

    $mail = new PHPMailer(true); // true enables exceptions
    
    try {
        $mail->isSMTP();
        $mail->SMTPDebug = 1;
        $mail->Host = 'ssl://smtp.mail.ru';
        $mail->SMTPAuth = true;
        $mail->Username = 'TEST@mail.ru';  // логин от вашей почты
        $mail->Password = 'PASSWORD';  // пароль от почтового ящика
        $mail->SMTPSecure = 'SSL';
        $mail->Port = 465;

        $mail->CharSet = 'UTF-8';
        $mail->setFrom('TEST@mail.ru', 'TestEmail');
        $mail->addAddress('TEST-2@mail.ru', 'TestEmail');
        $mail->isHTML(true);

        $mail->Subject = $_POST['subject'];
        $mail->Body = "Имя: {$_POST['name']}<br> Email: {$_POST['email']}<br> Сообщение: " . nl2br($_POST['body']);
        $mail->AltBody = "Имя: {$_POST['name']}\r\n Email: {$_POST['email']}\r\n Сообщение: {$_POST['body']}";

        if ($mail->send()) {
            $answer = '1';
        } else {
            $answer = '0';
            echo 'Письмо не может быть отправлено. ';
            echo 'Ошибка: ' . $mail->ErrorInfo;
        }
    } catch (Exception $e) {
        $answer = '0';
        echo 'Ошибка: ' . $e->getMessage();
    }
    die($answer);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Форма обратной связи!!!</title>
</head>
<body>

<form action="" method="post" id="contact">
    <p>
        <label for="name">Имя</label>
        <input type="text" name="name" id="name"><span></span>
    </p>
    <p>
        <label for="subject">Тема</label>
        <input type="text" name="subject" id="subject"><span></span>
    </p>
    <p>
        <label for="email">Email</label>
        <input type="text" name="email" id="email"><span></span>
    </p>
    <p>
        <label for="body">Сообщение</label>
        <textarea name="body" cols="30" rows="10" id="body"></textarea><span></span>
    </p>
    <p>
        <input id="submit" type="submit" name="submit" value="Отправить"><span></span>
    </p>
</form>

<script src="http://code.jquery.com/jquery-latest.js"></script>
<script>
$(function(){

	$('#contact').submit(function(){
		var errors = false;
		$(this).find('span').empty();

		$(this).find('input, textarea').each(function(){
			if( $.trim( $(this).val() ) == '' ) {
				errors = true;
				$(this).next().text( 'Не заполнено поле ' + $(this).prev().text() );
			}
		});

		if( !errors ){
			var data = $('#contact').serialize();
			$.ajax({
				url: 'index.php',
				type: 'POST',
				data: data,
				beforeSend: function(){
					$('#submit').next().text('Отправляю...');
				},
				success: function(res){
					if( res == 1 ){
						$('#contact').find('input:not(#submit), textarea').val('');
						$('#submit').next().empty();
						alert('Письмо отправлено');
					}else{
						$('#submit').next().empty();
						console.log('Ошибка отправки');
					}
				},
				error: function(){
					console.log('Ошибка!');
				}
			});
		}

		return false;
	});

});

</script>

</body>
</html>