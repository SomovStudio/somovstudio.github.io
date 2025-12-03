<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

//require 'phpmailer/PHPMailer.php';
require 'phpmailer/PHPMailerAutoload.php';

if (!empty($_POST['name'])) {

    $mail = new PHPMailer;
    $mail->isSMTP();

    $mail->SMTPDebug = 1;

    $mail->Host = 'ssl://smtp.mail.ru';

    $mail->SMTPAuth = true;
    $mail->Username = 'TEST@mail.ru';  // логин от вашей почты
	$mail->Password = 'PASSWORD';  // пароль от почтового ящика
    $mail->SMTPSecure = 'SSL';
    $mail->Port = '465';

    $mail->CharSet = 'UTF-8';
    $mail->From = 'TEST@mail.ru';  // адрес почты, с которой идет отправка
    $mail->FromName = 'Administrator'; // имя отправителя
    $mail->addAddress('TEST@mail.ru', 'Administrator');

    $mail->isHTML(true);

    $mail->Subject = $_POST['subject'];
    $mail->Body = "Имя: {$_POST['name']}<br> Email: {$_POST['email']}<br> Сообщение: " . nl2br($_POST['body']);
    $mail->AltBody = "Имя: {$_POST['name']}\r\n Email: {$_POST['email']}\r\n Сообщение: {$_POST['body']}";

    //$mail->SMTPDebug = 1;

    if ($mail->send()) {
        $answer = '1';
    } else {
        $answer = '0';
        echo 'Письмо не может быть отправлено. ';
        echo 'Ошибка: ' . $mail->ErrorInfo;
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



================

Ошибка возникает из-за того, что файл `phpmailer/PHPMailerAutoload.php` не найден. Вот как это исправить:

## Решение 1: Установите PHPMailer через Composer (рекомендуется)

1. Установите Composer (если еще не установлен)
2. В папке вашего проекта выполните:
```bash
composer require phpmailer/phpmailer
```

3. Замените строку подключения в коде:
```php
// Удалите эту строку:
// require 'phpmailer/PHPMailerAutoload.php';

// Добавьте вместо нее:
require 'vendor/autoload.php';
```

## Решение 2: Скачайте PHPMailer вручную

1. Скачайте PHPMailer с GitHub: https://github.com/PHPMailer/PHPMailer
2. Распакуйте в папку `phpmailer` в вашем проекте
3. Обновите путь подключения:
```php
// Замените на:
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';
```

## Решение 3: Исправьте текущую структуру

Если у вас уже есть папка `phpmailer`, проверьте:
- Что файл `PHPMailerAutoload.php` существует в папке `phpmailer`
- Что путь указан правильно относительно вашего файла `test_send2.php`

## Дополнительные исправления в коде:

Также в вашем коде есть синтаксическая ошибка в JavaScript - пропущен закрывающий тег:

**Исправьте:**
```html
<script src="http://code.jquery.com/jquery-latest.js"></script>
script> <!-- Ошибка здесь -->
```

**На:**
```html
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script> <!-- Правильно -->
```

И в конце файла исправьте:
```html
</script <!-- Ошибка -->
```
**На:**
```html
</script> <!-- Правильно -->
```

## Рекомендуемая структура с Composer:

```php
<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

// Подключение через Composer
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if (!empty($_POST['name'])) {
    $mail = new PHPMailer(true);
    
    try {
        $mail->isSMTP();
        $mail->SMTPDebug = 1;
        $mail->Host = 'ssl://smtp.mail.ru';
        $mail->SMTPAuth = true;
        $mail->Username = 'zioneclinkdatabase_ionclinic@mail.ru';
        $mail->Password = 'password';
        $mail->SMTPSecure = 'SSL';
        $mail->Port = 465;

        $mail->CharSet = 'UTF-8';
        $mail->setFrom('zioneclinkdatabase_ionclinic@mail.ru', 'Administrator');
        $mail->addAddress('sep@zionec.ru', 'Administrator');
        $mail->isHTML(true);

        $mail->Subject = $_POST['subject'];
        $mail->Body = "Имя: {$_POST['name']}<br>Email: {$_POST['email']}<br>Сообщение: " . nl2br($_POST['body']);
        $mail->AltBody = "Имя: {$_POST['name']}\r\nEmail: {$_POST['email']}\r\nСообщение: {$_POST['body']}";

        if ($mail->send()) {
            $answer = '1';
        } else {
            $answer = '0';
        }
    } catch (Exception $e) {
        $answer = '0';
        echo 'Ошибка: ' . $mail->ErrorInfo;
    }
    die($answer);
}
?>
```

**Самый простой способ** - установить через Composer, так как это обеспечит правильные зависимости и актуальную версию PHPMailer.