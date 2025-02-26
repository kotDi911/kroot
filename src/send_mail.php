<?php

require_once('../private/mailer.php');

$firstName = isset($_POST['firstName']) ? $_POST['firstName'] : '';
$lastName = isset($_POST['lastName']) ? $_POST['lastName'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
$company = isset($_POST['company']) ? $_POST['company'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';

$mailer = new Mailer();
$response = $mailer->sendEmail($firstName, $lastName, $email, $phone, $company, $message);

echo json_encode($response);
exit;
