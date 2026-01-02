<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  Controller::methodNotAllowed();
  exit;
}

$inputData = json_decode(file_get_contents("php://input"), true) ?? $_POST;

if (empty($inputData)) {
  Controller::requestRespond(400, "All fields are required");
  exit;
} else {
  if (!$user->validateEmail($inputData['email'])) {
    Controller::requestRespond(400, "Invalid email format");
    exit;
  }
  if (!$user->passwordCheck($inputData['password'])) {
    Controller::requestRespond(400, "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character");
    exit;
  }

  if (!$user->passwordMatch($inputData['password'], $inputData['confirm_password'])) {
    Controller::requestRespond(400, "Passwords do not match");
    exit;
  }

  if (!$user->checkEmailExists($inputData['email'])) {
    Controller::requestRespond(409, "Email already exists");
    exit;
  }
  if (!$user->checkUsernameExists($inputData['username'])) {
    Controller::requestRespond(409, "Username already exists");
    exit;
  }
  $result = $user->register($inputData);

  if ($result) {
    // Code for sending verification email can be added here
    Controller::requestRespond(201, "Registration successful", $result);
    exit;
  } else {

    Controller::requestRespond(409, "Email already exists");
    exit;
  }
}
