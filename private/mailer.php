<?php

require_once('PHPMailer/Exception.php');
require_once('PHPMailer/PHPMailer.php');
require_once('PHPMailer/SMTP.php');

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

class Mailer
{
    public function sendEmail($firstName, $lastName, $email, $phone, $company, $message)
    {
        $mail = new PHPMailer(true);
        $title = "The Kroot Get in touch";
        $body = "<table style='background-color: #ebf1f5; padding: 15px; width: 100%'>
                    <tr align='center'>
                    <img src='https://qdz.guk.temporary.site/email.png' alt='logo' width='103' height='50'>
                    </tr>
                    <tr>
                    <h2>Get in touch mail</h2>
                    <b>Имя:</b> $firstName $lastName<br>
                    <b>Почта:</b> $email<br><br>
                    <b>Телефон:</b> $phone<br><br>
                    <b>Компания:</b> $company<br><br>
                    <b>Сообщение:</b><br>$message
                    </tr>
                </table>";
        try {
            $mail->SMTPDebug = 0;
            $mail->isSMTP();
            $mail->CharSet = 'UTF-8';

            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'ng911unitydm@gmail.com';
            $mail->Password = 'thma mlea sxaf mrmn';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port = 465;


            $mail->setFrom('ng911unitydm@gmail.com', 'TheKroot');
            $mail->addAddress('ng911unitydm@gmail.com');

            $mail->Subject = $title;

            $mail->isHTML(true);
            $mail->Body = $body;


            if ($mail->send()) {
                return ['status' => 'success', 'result' => 'Message has been sent'];
            } else {
                return ['status' => 'error', 'result' => 'Message could not be sent.'];
            }
        } catch (Exception $e) {
            return ['status' => 'error', 'result' => 'Your message not send. Error: ' . $mail->ErrorInfo];
        }
    }
}