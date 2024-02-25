<?php

require "php/PHPMailer.php";
require "php/Exception.php";
require "php/SMTP.php";


$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$company = $_POST['company'];
$message = $_POST['message'];


$title = "The Kroot Get in touch";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> $firstName $lastName<br>
<b>Почта:</b> $email<br><br>
<b>Телефон:</b> $phone<br><br>
<b>Компания:</b> $company<br><br>
<b>Сообщение:</b><br>$message
";

$mail = new PHPMailer\PHPMailer\PHPMailer(true);

try {
    $mail->SMTPDebug = PHPMailer\PHPMailer\SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";

    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'ng911unitydm@gmail.com';
    $mail->Password = 'lqna bhzy ybjl pwdm';
    $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;


    $mail->setFrom('ng911unitydm@gmail.com');
    $mail->addAddress('ng911unitydm@gmail.com');

    //Content
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}